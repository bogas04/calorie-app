import { Box, Collapse, Heading, IconButton, Text } from "@chakra-ui/core";
import * as React from "react";
import { MealEntry } from "../store";
import { getTimeDifference } from "../util/time";
import ItemEntries from "./ItemEntries";
import NutritionBar from "./NutritionBar";

interface MealEntriesProps {
  entries: MealEntry[];
}

function MealEntries({ entries }: MealEntriesProps) {
  return (
    <>
      {entries.map((meal, i) => (
        <Meal key={i} meal={meal} />
      ))}
    </>
  );
}

export default React.memo(MealEntries);

function Meal({ meal }: { meal: MealEntry }) {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Box>
      <Heading mb="2">{meal.name}</Heading>
      <NutritionBar nutrition={meal.nutrition} border={false} />
      <Box my="2" d="flex" justifyContent="space-between" alignItems="center">
        <Box d="flex" alignItems="center" flex="1">
          <Text fontSize="xs" color="gray.600" fontWeight="300">
            {meal.portionWeight}g / {meal.totalWeight}g
          </Text>
          <Box w="1px" h="20px" bg="gray.500" mx="2" />
          <Text fontSize="xs" color="gray.600" fontWeight="300">
            {getTimeDifference(meal.timestamp)}
          </Text>
        </Box>
        <IconButton
          isRound
          variant="ghost"
          aria-label={show ? "Collapse" : "Expand"}
          onClick={handleToggle}
          icon={show ? "chevron-up" : "chevron-down"}
        />
      </Box>
      <Collapse isOpen={show} duration={0}>
        <Box pl="4">
          <ItemEntries items={meal.items} size="sm" />
        </Box>
      </Collapse>
    </Box>
  );
}
