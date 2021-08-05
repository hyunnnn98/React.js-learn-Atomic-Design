import React from 'react';

// styles
import Text, { Size, Weight } from '../../atoms/Text';

const Header = () => {
  return (
    <div>
      <Text size={Size.extraLarge}>organisms/Header</Text>
      <Text size={Size.regular} weight={Weight.bold}>
        first tab
      </Text>
      <Text size={Size.regular} weight={Weight.bold}>
        second tab
      </Text>
      <Text size={Size.regular} weight={Weight.bold}>
        third tab
      </Text>
    </div>
  );
};

export default Header;
