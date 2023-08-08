import { OfferingWrapper, Text, Type, SelectionTypes } from "./styles";

const Offering = () => {
  return (
    <OfferingWrapper>
      <Text>Offering awesome solutions both for</Text>
      <SelectionTypes>
        <Type>Individuals</Type>
        <Type>Business</Type>
      </SelectionTypes>
    </OfferingWrapper>
  );
};

export default Offering;
