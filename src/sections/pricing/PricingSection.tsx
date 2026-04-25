import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid2 from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

const APP_URL = import.meta.env.VITE_APP_URL ?? '#';

type BillingCycle = 'monthly' | 'annual';

type PlanConfig = {
  key: 'free' | 'pro' | 'family';
  recommended?: boolean;
  isFree?: boolean;
};

const PLANS: PlanConfig[] = [
  { key: 'free', isFree: true },
  { key: 'pro', recommended: true },
  { key: 'family' },
];

// ----------------------------------------------------------------------

type Props = {
  id?: string;
};

export function PricingSection({ id }: Props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Typography variant="overline" color="primary.main">
            {t('pricing.title')}
          </Typography>
          <Typography variant="h2">{t('pricing.subtitle')}</Typography>
        </Stack>

        {/* Billing toggle */}
        <Stack alignItems="center" sx={{ mb: 6 }}>
          <ToggleButtonGroup
            value={billing}
            exclusive
            onChange={(_, val) => val && setBilling(val)}
            size="small"
          >
            <ToggleButton value="monthly">{t('pricing.monthly')}</ToggleButton>
            <ToggleButton value="annual">
              <Stack direction="row" spacing={1} alignItems="center">
                <span>{t('pricing.annual')}</span>
                <Chip
                  label={t('pricing.saveLabel')}
                  size="small"
                  color="success"
                  sx={{ height: 20, fontSize: 10, fontWeight: 700 }}
                />
              </Stack>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        {/* Plan cards */}
        <Grid2 container spacing={3} alignItems="stretch">
          {PLANS.map((plan) => {
            const features = t(`pricing.plans.${plan.key}.features`, {
              returnObjects: true,
            }) as string[];

            const price =
              billing === 'annual' && !plan.isFree
                ? t(`pricing.plans.${plan.key}.priceAnnual`)
                : t(`pricing.plans.${plan.key}.price`);

            return (
              <Grid2 key={plan.key} size={{ xs: 12, sm: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: plan.recommended
                      ? `2px solid ${theme.palette.primary.main}`
                      : `1px solid ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
                    position: 'relative',
                    boxShadow: plan.recommended ? theme.customShadows.primary : 'none',
                  }}
                >
                  {plan.recommended && (
                    <Chip
                      label={t('pricing.recommended')}
                      color="primary"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontWeight: 700,
                      }}
                    />
                  )}

                  <Typography variant="h5" sx={{ mb: 0.5 }}>
                    {t(`pricing.plans.${plan.key}.name`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {t(`pricing.plans.${plan.key}.description`)}
                  </Typography>

                  <Stack direction="row" alignItems="baseline" spacing={0.5} sx={{ mb: 3 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800 }}>
                      {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`pricing.plans.${plan.key}.period`)}
                    </Typography>
                  </Stack>

                  <Divider sx={{ mb: 3 }} />

                  <List disablePadding sx={{ flexGrow: 1, mb: 3 }}>
                    {features.map((feature) => (
                      <ListItem key={feature} disablePadding sx={{ py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Iconify
                            icon="solar:check-circle-bold"
                            width={18}
                            sx={{ color: 'success.main' }}
                          />
                        </ListItemIcon>
                        <Typography variant="body2">{feature}</Typography>
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant={plan.recommended ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    href={`${APP_URL}/cadastro`}
                  >
                    {plan.isFree ? t('pricing.ctaFree') : t('pricing.ctaPaid')}
                  </Button>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </Box>
  );
}
