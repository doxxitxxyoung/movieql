export const people = [
    {
        id: "0",
        name: "A",
        age: 18,
        gender: "female"
    },
    {
        id: "1",
        name: "B",
        age: 19,
        gender: "female"
    },

    {
        id: "2",
        name: "C",
        age: 20,
        gender: "male"
    },
    {
        id: "3",
        name: "D",
        age: 21,
        gender: "male"
    },

];

export const getById = (id) => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};

