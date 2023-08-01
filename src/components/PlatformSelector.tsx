import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "./../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (plarform: Platform) => void;
  selectedPlatfromId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatfromId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatfrom = data?.results.find(
    (p) => p.id === selectedPlatfromId
  );
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfrom?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
