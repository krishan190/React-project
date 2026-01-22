import { Modal } from "react-bootstrap";
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from "react";
import { useCreateTrailRequest } from "../widgets/service";
import { Loader } from "components";
import { iconMap, typeToActions } from "./config/config";

const inputTypeMap = {
    email: "email",
    call: "number",
    escalate: "text",
    meeting: "text"
};

export default function ActionModal({ show, onHide, flag }) {

    // console.log("flag", flag);

    const [selectedAction, setSelectedAction] = useState(null);
    const [actionNotes, setActionNotes] = useState("");

    const [contactInput, setContactInput] = useState("");

    const { mutate: createTrail, isPending: loadingTrail } = useCreateTrailRequest()

    const actionOptions = flag ? typeToActions[flag.type]
        || typeToActions["CD Balance"] : [];

    console.log("actionOptions", actionOptions);

    // useEffect(() => {
    //     const selected = actionOptions.find(a => a.type === selectedAction)
    //     // console.log("selected", selected);
    //     if (selected?.type === "call") {
    //         setContactInput(flag?.employer_contact || flag?.client_contact || "");
    //     } else if (selected?.type === "email") {
    //         setContactInput(flag?.employer_email || flag?.client_email || "")
    //     } else {
    //         setContactInput("")
    //     }
    //     setActionNotes("");

    // }, [selectedAction, flag, actionOptions])

    const handleActionClick = (type) => {
        setSelectedAction(type);
    }

    const handleSubmit = () => {
        // console.log("flag type", flag.type);

        const trimmedNotes = actionNotes.replace(/\s+/g, " ").trim();
        const trimmedContactInput = contactInput.replace(/\s+/g, " ").trim();

        // ---------- base payload ----------
        const payload = {
            action: selectedAction,
            action_notes: trimmedNotes,
        };

        // ---------- module-specific payload ----------
        if (flag.type) {
            // Auto Escalations
            payload.employer_id = flag?.employer_id
            payload.policy_id = flag?.policy_id;
            payload.module = "Auto Escalations";
            payload.module_type = flag?.type;
        } else {
            // CD Balance
            payload.employer_id = flag?.employer_id;
            payload.module = "CD Balance";
            payload.module_type = "cd balance";
        }

        // ---------- action-type payload ----------
        switch (selectedAction) {
            case "call":
                payload.client_contact =
                    trimmedContactInput || flag?.employer_contact || flag?.client_contact || null;
                break;
            case "email":
                payload.client_email =
                    trimmedContactInput || flag?.employer_email || flag?.client_email || null;
                break;
            case "escalate":
                payload.client_escalate = trimmedContactInput || null;
                break;
            case "meeting":
                payload.client_meeting = trimmedContactInput || null;
                break;
            default:
                break;
        }


        console.log("payload", payload);

        // API Call
        // createTrail({ data: payload }, {
        //     onSuccess: () => {
        //         setActionNotes("");
        //         onHide();
        //     }
        // })
    };


    if (!flag) return null;


    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                centered
                contentClassName="tw-rounded-xl"
                scrollable
            >
                <Modal.Header className="tw-border-b-0" closeButton>
                    <Modal.Title className="tw-text-lg tw-font-semibold">
                        Action Options – {flag.client}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="tw-h-full tw-overflow-auto">
                    {loadingTrail && <Loader />}

                    <p className="tw-mx-2 tw-text-md tw-mb-4">
                        Choose an action to resolve:{" "}
                        <span className="tw-font-semibold">{flag.issue ?? flag.actions}</span>
                    </p>

                    <div className="tw-flex tw-flex-col tw-gap-3">
                        {
                            actionOptions.map((action) => {
                                const Icon = iconMap[action.type] || InfoIcon;
                                const isSelected = selectedAction === action.type;
                                // console.log("isSelected ", isSelected);  
                                console.log("flag", flag);


                                return (
                                    <div key={action.type}>
                                        <button
                                            onClick={() => handleActionClick(action.type)}
                                            className={`tw-w-full tw-border tw-rounded-lg tw-p-4 tw-text-left tw-flex tw-items-center tw-gap-3 tw-transition-all
                                        ${isSelected
                                                    ? "tw-border-[#00448e] tw-bg-blue-50 tw-shadow-md"
                                                    : "tw-border-gray-300 hover:tw-border-gray-400"
                                                }`}>
                                            <Icon className={`tw-text-xl ${isSelected ? "tw-text-[#00448e]" : "tw-text-gray-600"}`} />
                                            <div>
                                                <div className="tw-font-medium">{action.label}</div>
                                                <div className="tw-text-sm tw-text-gray-600">{action.description}</div>
                                                <div className="tw-text-sm tw-text-gray-600">{(action.type === "call" ? flag?.client_contact : flag?.employer_contact)}</div>
                                                <div className="tw-text-sm tw-text-gray-600">{(action.type === "email" ? flag?.client_email : flag?.employer_email)}</div>
                                            </div>
                                        </button>


                                        {/* {isSelected && inputTypeMap[action.type] && (
                                            <input
                                                type={inputTypeMap[action.type]}
                                                value={contactInput}
                                                onChange={(action.type === "escalate" || action.type === "meeting") && ((e) => setContactInput(e.target.value))}
                                                placeholder={`Message for "${action.label}"...`}
                                                className="tw-w-full tw-border tw-border-solid tw-p-2 tw-mt-2 tw-rounded tw-text-sm"
                                                required
                                            />
                                        )} */}
                                    </div>
                                )
                            })
                        }

                        {!selectedAction && (
                            <p className="tw-text-red-500 tw-text-sm tw-mt-1">Atleast One Action Must be Selected.</p>
                        )}

                        <div className="tw-mt-6">
                            <label className="tw-block tw-text-md tw-font-semibold tw-mb-2">
                                Action Notes <span className="tw-text-red-500">*</span>
                            </label>
                            <textarea
                                value={actionNotes}
                                onChange={(e) => setActionNotes(e.target.value)}
                                placeholder="Add any additional notes or comments.. (Required)"
                                className={`tw-w-full tw-p-4 tw-border tw-rounded-lg focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#00448e] ${!actionNotes.trim() ? 'tw-border-red-300' : 'tw-border-gray-300'}`}
                                rows={4}
                                required
                            />
                            {!actionNotes.trim() && (
                                <p className="tw-text-red-500 tw-text-sm tw-mt-1">Action notes are required.</p>
                            )}
                        </div>

                        <div className="tw-flex tw-justify-center">
                            <button
                                onClick={handleSubmit}
                                disabled={!selectedAction || !actionNotes.trim()}
                                className={`tw-px-3 tw-py-2 tw-rounded-lg tw-font-medium tw-transition-all
                                        ${(!selectedAction || !actionNotes.trim())
                                        ? "tw-bg-gray-300 tw-text-gray-500 tw-cursor-not-allowed"
                                        : "tw-bg-[#00448e] hover:tw-bg-[#003370] tw-text-white tw-shadow-lg hover:tw-shadow-xl tw-border-0"
                                    }`}>
                                Submit
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
