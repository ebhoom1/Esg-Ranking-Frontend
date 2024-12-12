import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Text,
  VStack,
  Progress,
  HStack,
  Circle,
} from "@chakra-ui/react";

export default function ESGForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Flex direction="column" align="center" p={5}>
      <Box position="sticky" top={0} zIndex={10} p={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold" mt={10} mb={4} textAlign="center">
          ESG Information Form
        </Text>

        {/* Progress Bar with Indicators */}
        <Flex align="center" justify="center" mb={6}>
  {[...Array(6)].map((_, index) => (
    <HStack key={index} spacing={4} align="center">
      <Circle
        size="30px"
        bg={index + 1 <= step ? "green.500" : "gray.300"} // Highlight all steps up to the current one
        color="white"
      >
        {index + 1}
      </Circle>
      {index < 5 && (
        <Box
          width="50px"
          height="4px"
          bg={index + 1 < step ? "green.500" : "gray.300"} // Highlight lines connecting completed steps
        />
      )}
    </HStack>
  ))}
</Flex>


        <Text mb={4} textAlign="center">Step {step} of 6</Text>
      </Box>

      <Box width="80%" p={5} boxShadow="lg" borderRadius="md" bg="white">
        {step === 1 && (
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Environmental Information</Text>

            <Input placeholder="Scope 1 Emissions (tons/year)" />
            <Input placeholder="Scope 2 Emissions (tons/year)" />
            <Input placeholder="Scope 3 Emissions (tons/year)" />
            <Input placeholder="Percentage reduction in emissions" />
            <Input placeholder="Total Energy Consumed (kWh/year)" />
            <Input placeholder="Percentage of Energy from Renewable Sources" />
            <Input placeholder="Renewable Energy Generation Capacity" />
            <Input placeholder="Total Water Consumption (liters/year)" />
            <Input placeholder="Percentage of Water Recycled/Recovered" />
            <Input placeholder="Total Waste Generated (tons/year)" />
            <Input placeholder="Percentage of Waste Recycled/Disposed Safely" />
            <Input placeholder="Emissions of NOx, SOx, and PM2.5 (tons/year)" />
          </VStack>
        )}

        {step === 2 && (
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Social Information</Text>

            <Input placeholder="Total Number of Employees" />
            <Input placeholder="Diversity Metrics (e.g., % women, marginalized groups)" />
            <Input placeholder="Average Training Hours per Employee" />
            <Input placeholder="CSR Spend (₹/year)" />
            <Input placeholder="CSR Initiative Details" />
            <Input placeholder="Lost-Time Injury Frequency Rate (LTIFR)" />
            <Input placeholder="Total Workers Trained Annually" />
          </VStack>
        )}

        {step === 3 && (
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Governance Information</Text>

            <Input placeholder="Total Board Members" />
            <Input placeholder="Percentage of Women or Independent Directors" />
            <Input placeholder="Annual Board Evaluations Conducted (Yes/No)" />
            <Input placeholder="Anti-Corruption Policies in Place (Yes/No)" />
            <Input placeholder="Whistleblower Mechanism (Yes/No)" />
            <Input placeholder="Number of Incidents Reported" />
            <Input placeholder="Regulatory Compliance (Yes/No)" />
          </VStack>
        )}

        {step === 4 && (
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Net Zero and Policy Tracking</Text>

            <Input placeholder="Target Year for Achieving Net Zero" />
            <Input placeholder="Participation in Subsidy Programs (Yes/No)" />
            <Input placeholder="Details of Subsidies Received" />
            <Input placeholder="Number of Greenfield/Brownfield Projects" />
          </VStack>
        )}

        {step === 5 && (
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Uploads and Attachments</Text>

            <Input type="file" placeholder="Upload ESG Reports" />
            <Input type="file" placeholder="Energy Audit Reports" />
            <Input type="file" placeholder="Water Audit Reports" />
            <Input type="file" placeholder="Waste Management Plans" />
          </VStack>
        )}

        {step === 6 && (
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Review and Submit</Text>
            <Text>Review all entered data before submitting the form.</Text>
            <Button colorScheme="blue">Submit</Button>
          </VStack>
        )}

        {/* Navigation Buttons */}
        <Flex justify="space-between" mt={6}>
          <Button
            colorScheme="gray"
            onClick={prevStep}
            isDisabled={step === 1}
          >
            Previous
          </Button>
          <Button
            colorScheme="green"
            onClick={nextStep}
            isDisabled={step === 6}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
