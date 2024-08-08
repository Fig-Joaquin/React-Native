interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Addres; // Extended Address
  isActive: boolean;
  hasJob?: boolean; // Optional value 'undefined', 'null' or 'boolean'
  number?: string;
  fullName(): string;
}

interface Addres {
  city: string;
  country: string;
  houseNu: string;
}

export const ObjectLiteral = () => {

  const person: Person = {
    firstName: "Joaquin",
    lastName: "Sanchez",
    age: 23,
    address: {
      city: "Concepcion",
      country: "Chile",
      houseNu: "273",
    },
    isActive: true,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };


  return (
    <>
      <div>ObjectLiteral</div>
      <pre>
      {JSON.stringify(person, null, 2)}
      </pre>
    </>
  );
};
