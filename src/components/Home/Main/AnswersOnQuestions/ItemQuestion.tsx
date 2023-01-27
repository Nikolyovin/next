import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface IProps {
    title: string
    text: string
}

const ItemQuestion: React.FC<IProps> = ({ title, text }) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                <h6 className='amatic font-bold text-2xl md:text-4xl'>{title}</h6>
            </AccordionSummary>
            <AccordionDetails>
                <p className='md:text-xl'>{text}</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default ItemQuestion
