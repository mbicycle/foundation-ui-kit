type Props = {
  children: React.ReactNode;
};
export const Button = (props: Props) => (
  <button className="bg-red-500 px-4 py-2 text-xl text-white rounded-md hover:bg-red-400 transition-colors">
    {props.children}
  </button>
);
