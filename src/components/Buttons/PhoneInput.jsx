import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const PhoneNumberInput = () => {

    const [phone, setPhone] = useState("");

    return (
        <div>
            <PhoneInput
                country={"np"}
                value={phone}
                onChange={(value) => setPhone(value)}
                enableSearch={true}
                searchPlaceholder="Search country"
                inputStyle={{
                    width: "100%",
                    height: "40px",
                    fontSize: "16px",
                }}
                buttonStyle={{
                    background: "#fff",
                    border: "1px solid #ddd",
                }}
                placeholder="Phone Number"
            />

        </div>
    )
}

export default PhoneNumberInput