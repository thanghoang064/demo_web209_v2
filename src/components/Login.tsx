import { FC, useState } from "react";

interface IProps {
  nameForm?: string;
}

const Login: FC<IProps> = (props: IProps) => {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleEmail = () => {
    let newErrors: string[] = [];

    if (!email || email.length === 0) {
      newErrors.push("Email không được để trống");
    } else if (email.length < 6) {
      newErrors.push("Email phải có ít nhất 6 ký tự");
    }

    setErrors((prevErrors) => {
        const uniqueErrors = new Set([...prevErrors, ...newErrors]);
        return Array.from(uniqueErrors);
      }); // sử hạng hàm set để lọc những phần tử trùng nhau trong mảng
  };

  return (
    <>
      <h1>{props.nameForm}</h1>
      <form>
        <label>
          Email:{" "}
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <button type="button" onClick={handleEmail}>
          Gửi
        </button>
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
};

export default Login;