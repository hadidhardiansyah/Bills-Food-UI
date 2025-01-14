import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { FoodMenuItemProps } from '../../models/foodMenuModel';

const demo = [
    {
        category: 'Nuts & Seeds',
        ingredients: ['Cashew'],
    },
    {
        category: 'Protein',
        ingredients: ['Protein', 'Bacon strips'],
    },
];

interface MenuCardProps {
    menu: FoodMenuItemProps;
}

const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
    const handleCheckBoxChange = (value: any) => {
        console.log(`Value: ${value}`);
    };

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="lg:flex items-center justify-between">
                        <div className="lg:flex items-center lg:gap-5">
                            <img
                                className="w-[7rem] h-[7rem] object-cover"
                                src={menu.images[0]}
                                alt=""
                            />
                            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                                <p className="font-semibold text-xl">
                                    {menu.name}
                                </p>
                                <p>
                                    Rp.{' '}
                                    <span>
                                        {menu.price.toLocaleString('id-ID')}
                                    </span>
                                </p>
                                <p className="text-gray-400">
                                    {menu.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <div className="flex gap-5 flex-wrap">
                            {demo.map((item) => (
                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {item.ingredients.map((item) => (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        onChange={() =>
                                                            handleCheckBoxChange(
                                                                item
                                                            )
                                                        }
                                                    />
                                                }
                                                label={item}
                                            />
                                        ))}
                                    </FormGroup>
                                </div>
                            ))}
                        </div>
                        <div className="pt-5">
                            <Button
                                variant="contained"
                                disabled={false}
                                type="submit"
                            >
                                {true ? 'Add to Cart' : 'Out Of Stock'}
                            </Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default MenuCard;
