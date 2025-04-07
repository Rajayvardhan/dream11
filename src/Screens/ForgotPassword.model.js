import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  message,
  IconButton,
} from "antd";
import axiosInstance from "../axiosInstance";

require("./otp.css");

function ForgotPasswordModel(props) {
  const [otp, setOtp] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setEmail] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [MOtp, setMOtp] = useState(false);
  const [Otp, setotp] = useState(1);
  const [Subb, setSubb] = useState(1);

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

  const onOtp = () => {
    axiosInstance.post("/sms/send", { mobile: mobile }).then((res) => {
      if (res.data && res.data.responseCode === -1) {
        message.error("Email Sent Fail");
      } else if (res.data && res.data.responseCode === 1) {
        message.success("Otp Sent successfully");
        // setIsModalOpen(true);
        setotp("okk");
      } else message.error("Something wrong. Please try again...!");
    });
  };

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
    axiosInstance
      .post("/sms/send", { mobile: props.mobile })
      .then((res) => {
        if (res.data && res.data.responseCode === -1) {
          message.error("Otp Sent Fail");
        } else if (res.data && res.data.responseCode === 1) {
          message.success("Otp Sent successfully");
        } else message.error("Something wrong. Please try again...!");
      });
  };
  var existMatch = "";
  const onCheakOtp = async () => {
    if (otp.length === 6) {
      await axiosInstance.get("/sms").then((response) => {
        existMatch = response.data.data.find((x) => x.mobile === mobile);
      });
      if (otp === existMatch.otp) {
        setMOtp(true);
        message.success("Otp verify successfully");
        setSubb("okk");
        // props.setMOtp(true)
        // props.setIsModalOpen(false)
        // props.setOtp("0kk")
      } else {
        setMOtp(false);
        message.error("Plese enter vailid otp");
      }
    } else {
      message.error("Enter six digit otp");
    }
  };
  const onUpdatePassword = async () => {
    const data = {
      password: password,
    };

    if (!!password) {
      await axiosInstance.get("/member").then((response) => {
        existMatch = response.data.data.find((x) => x.mobile === mobile);
      });
      if (mobile === existMatch.mobile) {
        await axiosInstance
          .put(`/member/${existMatch._id}`, data)
          .then((res) => {
            if (res.data && res.data.responseCode === -1) {
              message.error("Record Already Exists");
            } else if (res.data && res.data.responseCode === 1) {
              message.success("Record updeted successfully");
              props.setIsModalOpen(false);
            } else message.error("Something wrong. Please try again...!");
          });

        // props.setOtp("0kk")
      } else {
        setMOtp(false);
        message.error("Plese Enter Vailid Otp");
      }
    } else {
      message.error("Enter Six Digit Otp");
    }
  };
  return (
      
      <div className="realludokingsize"> <Modal
      title="Forgot password"
      open={props.isVisible}
      onCancel={props.onCancel}
      width={"500px"}
    >
      <div>
        <div>
          {Subb === 1 && (
            <div>
              {Subb === 1 && <h4>Verify OTP</h4>}
              {Subb === "okk" && <h4>Verify OTP</h4>}

              {Subb === 1 && (
                <div style={{ marginBottom: "20px" }}>
                  <Form>
                    <Form.Item
                      colon={false}
                      label="Mobile No."
                      name="mobile"
                      rules={[
                        {
                          required: true,
                          type: "mobile",
                          message: "Please input valid mobile!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Mobile"
                        onChange={(e) => setEmail(e.target.value)}
                        value={mobile}
                      />
                    </Form.Item>
                  </Form>
                </div>
              )}
              <div style={{ textAlign:"right", marginBottom: "10px" }}>
                {!!mobile && mobile && Otp === 1 && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => onOtp()}
                    className="but033"
                  >
                    genrate Otp
                  </Button>
                )}
              </div>
              {Otp === "okk" && Subb === 1 && (
                <Input
                  placeholder="Enter 6 digite otp"
                  maxLength={6}
                  minLength={6}
                  value={otp}
                  onChange={({ target }) => {
                    setOtp(target.value);
                  }}
                />
              )}

              {Otp === "okk" && Subb === 1 && (
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
              )}

              {Subb === 1 && (
                <button className="submit-btn11" onClick={() => onCheakOtp()}>
                  SUBMIT
                </button>
              )}
            </div>
          )}
          {Subb === "okk" && (
            <div>
              <div style={{ marginBottom: "20px" }}>
                <Input
                  placeholder="Enter Your Password"
                  type="password"
                  value={password}
                  onChange={({ target }) => {
                    setpassword(target.value);
                  }}
                />
              </div>
              <button
                className="submit-btn11"
                onClick={() => onUpdatePassword()}
              >
                SUBMIT
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal></div>
   
  );
}

export default ForgotPasswordModel;
