import { useAuth } from '@/hooks/useAuth';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <List sx={{ padding: 0 }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Email"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {user.email}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default UserProfile;
