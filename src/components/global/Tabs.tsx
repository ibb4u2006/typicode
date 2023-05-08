import { MouseEvent, ReactNode, SyntheticEvent, useState } from 'react';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Box } from '@mui/material';

type TabsNav = {
  tabs: { id: string; title: string; body: ReactNode }[];
};

const TabsNav: React.FC<TabsNav> = ({ tabs }) => {
  const [value, setValue] = useState<string>(tabs[0].id);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box display="flex" flexDirection="column" gap={2} width="100%">
        <TabList onChange={handleChange} aria-label="tabs">
          {tabs.map((tab) => {
            return (
              <Tab
                key={tab.id}
                value={tab.id}
                label={tab.title}
                onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
              />
            );
          })}
        </TabList>
        {tabs.map((tab) => {
          return (
            <TabPanel key={tab.id} value={tab.id}>
              {tab.body}
            </TabPanel>
          );
        })}
      </Box>
    </TabContext>
  );
};

export default TabsNav;
