import { HouseTableWrapper, HouseTableRow, Title } from "./style";

export default function HouseTable(props: any): JSX.Element {
  const { data } = props;
  return (
    <HouseTableWrapper>
      <HouseTableRow>
        <Title>Name: </Title>
        {data.name}
      </HouseTableRow>
      <HouseTableRow>
        <Title>Region: </Title>
        {data.region}
      </HouseTableRow>
      <HouseTableRow>
        <Title>Coat of Arms: </Title>
        {data.coatOfArms}
      </HouseTableRow>
      <HouseTableRow>
        <Title>Words: </Title>
        {data.words}
      </HouseTableRow>
      <HouseTableRow>
        <Title>Titles: </Title>
        {data.titles}
      </HouseTableRow>
      <HouseTableRow>
        <Title>Seats: </Title>
        {data.seats}
      </HouseTableRow>
      <HouseTableRow>
        <Title>Has died out: </Title>
        {data.diedOut}
      </HouseTableRow>
      <HouseTableRow>
        <Title>Has Overlord: </Title>
        <a href={data.overlord}>LINK</a>{" "}
      </HouseTableRow>
      <HouseTableRow>
        <Title>Number of Cadet Branches: </Title>
        {data.numberOfCadetBranches}
      </HouseTableRow>
    </HouseTableWrapper>
  );
}
