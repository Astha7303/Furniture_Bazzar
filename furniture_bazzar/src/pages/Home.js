import Section from "../components/Section";

const dummyData = [
  {
    name: "Modern Chair",
    description: "Comfortable and stylish chair",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Wooden Chair",
    description: "Durable wooden chair",
    image: "https://via.placeholder.com/150",
  },
];

function Home() {
  return (
    <div>
      <Section title="Chairs" data={dummyData} route="/chairs" />
      <Section title="Beds" data={dummyData} route="/beds" />
      <Section title="Cupboards" data={dummyData} route="/cupboards" />
      <Section title="Sofa" data={dummyData} route="/sofa" />
      <Section title="Dining Tables" data={dummyData} route="/dining" />
      <Section title="Study Tables" data={dummyData} route="/study" />
    </div>
  );
}

export default Home;
