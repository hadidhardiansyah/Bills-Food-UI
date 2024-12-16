import { Button, Card } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';

interface AddressCardProps {
    item: {};
    showButton: boolean;
    handleSelectAddress: (item: {}) => void;
}

export const AddressCard: React.FC<AddressCardProps> = ({
    item,
    showButton,
    handleSelectAddress,
}) => {
    return (
        <Card className="flex gap-5 w-64 p-5">
            <HomeIcon />
            <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p>{'Gang Apa aja, Jakarta Selatan, DKI Jakarta, Indonesia'}</p>
                {showButton && (
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => handleSelectAddress(item)}
                    >
                        Select
                    </Button>
                )}
            </div>
        </Card>
    );
};
