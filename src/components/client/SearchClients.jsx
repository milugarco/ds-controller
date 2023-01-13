import { Card, Chip } from "@mui/material"
import { ManageSearchIcon as ManageSearchIcon, Search as SearchIcon } from '@mui/icons-material';

const SearchClients = () => {
    return (
        <Card>
            <Chip
                label="Pesquisar"
                icon={<ManageSearchIcon />}
            />
        </Card>
    )
}

export default SearchClients