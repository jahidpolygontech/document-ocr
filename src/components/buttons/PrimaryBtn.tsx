import { Spinner } from "@heroui/react";
import classNames from "classnames";

interface Props {
  disabled?: boolean;
  loading?: boolean;
  content: string;
}

const PrimaryBtn: React.FC<Props> = ({ disabled, loading, content }) => {
  return (
    <button
      type="submit"
      className={classNames(
        "flex justify-center text-white py-2 px-6 rounded-lg font-bold",
        {
          "bg-gradient-to-tr from-cyan-300 to-cyan-400 cursor-not-allowed opacity-60":
            disabled || loading,
          "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700":
            !disabled && !loading,
        }
      )}
    >
      <div
        className="flex justify-center items-center gap-2 whitespace-nowrap"
        style={{ width: "50px" }}
      >
        {loading ? <Spinner color="white" size="sm" /> : content}
      </div>
    </button>
  );
};

export default PrimaryBtn;
