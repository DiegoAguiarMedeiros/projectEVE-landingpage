import { useTranslation } from 'react-i18next';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type FaqItem = {
  question: string;
  answer: string;
};

// ----------------------------------------------------------------------

type Props = {
  id?: string;
};

export function FaqSection({ id }: Props) {
  const { t } = useTranslation();

  const items = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography variant="overline" color="primary.main">
            {t('faq.title')}
          </Typography>
          <Typography variant="h2">{t('faq.subtitle')}</Typography>
        </Stack>

        {/* Accordion */}
        <Stack spacing={1}>
          {items.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '8px !important',
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<Iconify icon="solar:alt-arrow-down-bold" width={20} />}
                sx={{ px: 3, py: 1.5 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 2.5 }}>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
