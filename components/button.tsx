export default function Button(props: any) {
  return (
    <button
      type="submit"
      className="w-48 h-12 bg-[#88D498] rounded-md font-bold text-white transition ease-in-out delay-150 hover:text-[#F3E9D2] hover:bg-[#1A936F]"
    >
      {props.text}
    </button>
  );
}
