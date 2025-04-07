import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row, Select, message, IconButton } from "antd";
import axiosInstance from "../axiosInstance";

require("./otp.css");


function Otpvalidation(props) {
    const [otp, setOtp] = useState("");
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);
    const [MOtp, setMOtp] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const resendOTP = () => {
        setMinutes(1);
        setSeconds(30);
        axiosInstance.post("/sms/send", { mobile: props.mobile }).then((res) => {
            if (res.data && res.data.responseCode === -1) {
                message.error("Otp Sent Fail");
            } else if (res.data && res.data.responseCode === 1) {
                message.success("Otp Sent successfully");

            } else message.error("Something wrong. Please try again...!");
        });
    };
    var existMatch = ''
    const onCheakOtp = async () => {
        if (otp.length === 6) {
            await axiosInstance.get("/sms").then((response) => {
                existMatch = response.data.data.find(x => x.mobile === props.mobile);
            });
            if (otp === existMatch.otp) {
                setMOtp(true)
                message.success("Otp successfully");
                props.setMOtp(true)
                props.setIsModalOpen(false)
                props.setOtp("0kk")
            }
            else {
                setMOtp(false)
                message.error("Plese enter vailid otp");

            }
        }
        else {
            message.error("Enter Six Digit Otp");
        }
    };

    return (
        <Modal
            title="OTP Verification"
            open={props.isVisible}
            onCancel={props.onCancel}
            width={"500px"}

        >
            <div>
                <div >
                    <h4>Verify OTP</h4>

                    <Input
                        placeholder="Enter 6 digite otp"
                        maxLength={6}
                        minLength={6}
                        value={otp}
                        onChange={({ target }) => {
                            setOtp(target.value);
                        }}
                    />

                    <div className="countdown-text11">
                        {seconds > 0 || minutes > 0 ? (
                            <p>
                                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </p>
                        ) : (
                            <p>Didn't recieve code?</p>
                        )}

                        <button
                            disabled={seconds > 0 || minutes > 0}
                            style={{
                                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                            }}
                            onClick={resendOTP}
                        >
                            Resend OTP
                        </button>
                    </div>

                    <button className="submit-btn11" onClick={() => onCheakOtp()}>SUBMIT</button>
                </div>
            </div>
        </Modal>
    );
}

export default Otpvalidation;


