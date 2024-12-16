export const isPresentInFavorites = (favorites: any, restaurant: any) => {
    for (let item of favorites) {
        if (restaurant.id === item.id) {
            return true;
        }
    }
    return false;
};
