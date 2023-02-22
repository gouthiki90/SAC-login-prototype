import React from "react";
import { SignInDto } from "../../lib/types/login/signInDto";
import { InputListData } from "../../lib/types/inputData.type";

type LogInInputListData = InputListData<SignInDto>;

const inputDataList: LogInInputListData[] = [
  {
    id: "login_phone",
    label: "휴대폰번호",
    name: "phoneNumber",
    type: "tel",
    placeholder: "010-****-****",
    required: true,
  },
  {
    id: "login_sexsuality",
    label: "성정체성",
    name: "sexsuality",
    type: "text",
    placeholder: "자유롭게 기입해주세요.",
  },
  {
    id: "login_interest",
    label: "관심사",
    name: "interesties",
    type: "checkbox",
    placeholder: "원하는 관심사를 선택해주세요.",
  },
];

export const LoginForm: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="flex flex-col justify-center items-center w-full max-w-2xl min-[320px] p-4">
          <div>
            <p className="text-[100px] font-extrabold">{"SAC"}</p>
            <p className="text-[32px]">{"MANAGEMENT SYSTEM"}</p>
            <p className="text-3xl font-bold">{"회원가입"}</p>
          </div>
          <div className="mt-12 w-full">
            <form>
              <div className="-mt-4">
                <input
                  type="tel"
                  name="login_phone"
                  aria-label="휴대폰번호"
                  placeholder="010-****-****"
                  required
                  className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="text"
                  name="login_sexsuality"
                  aria-label="성정체성"
                  placeholder="자유롭게 기입해주세요."
                  className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="checkbox"
                  name="login_interest"
                  aria-label="관심사"
                  className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <button className="bg-primary rounded-lg border border-primary w-full text-white transition-all durating-300 px-3 py-2 cursor-pointer">
                Sign in
              </button>
            </form>
          </div>
          <div className="mt-4 p-4">
            <div>
              <p className="text-xs hover:underline hover:cursor-pointer">
                {"이미 회원이신가요?"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
