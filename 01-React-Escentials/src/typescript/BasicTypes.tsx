export const BasicTypes = () => {
  const name: string = "Joaquin";
  const age: number = 23;
  const isActive: boolean = false;

  const languages: string[] = ["JavaScript", "TypeScript", "Python"];

  return (
    <>
      <div>BasicTypes</div>
      <br />
      {name}
      <br />
      {age}
      <br />
      {languages}
      <br />
      {isActive}
    </>
  );
};
