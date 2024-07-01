import { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAuth } from '../config/AuthContext';
import API_ROUTES from '../config/ApiUrls';

const Me = () => {
    const { token } = useAuth();
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_ROUTES.ME}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUserData(data);
        };

        fetchData();
    }, [token]);

    if (!userData) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Container>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4">Mes informations</Typography>
                <Typography variant="body1">Email: {userData.email}</Typography>
                <Typography variant="body1">Nom: {userData.lastName}</Typography>
                <Typography variant="body1">Nom: {userData.firstName}</Typography>
            </Box>
        </Container>
    );
};

export default Me;
