import { Group, Paper, SimpleGrid, Text } from '@mantine/core';
import {
    IconUserPlus,
    IconDiscount2,
    IconReceipt2,
    IconCoin,
    IconArrowUpRight,
    IconArrowDownRight,
    IconSettings,
    IconArchive,
    IconUserCancel,
    IconUserFilled,
    IconArchiveFilled,
    IconSettingsFilled,
    IconTrashFilled,
} from '@tabler/icons-react';
import classes from './StatsGrid.module.css';

const icons = {
    user: IconUserFilled,
    settings: IconSettingsFilled,
    arch: IconArchiveFilled,
    del: IconTrashFilled,
};

const data = [
    { title: 'Total Users', icon: 'user', value: '5,173', diff: 34 },
    { title: 'Total Roles', icon: 'settings', value: '56', diff: -13 },
    { title: 'Archived Users', icon: 'arch', value: '573', diff: -30 },
    { title: 'Deleted Users', icon: 'del', value: '2,543', diff: 18 },
];

export function StatsGrid() {
    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
            <Paper withBorder p="md" radius="md" key={stat.title}>
                <Group justify="space-between">
                    <Text size="xs" c="dimmed" className={classes.title}>
                        {stat.title}
                    </Text>
                    <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
                </Group>

                <Group align="flex-end" gap="xs" mt={25}>
                    <Text className={classes.value}>{stat.value}</Text>
                </Group>

                <Text fz="xs" c="dimmed" mt={7}>
                    in last year.
                </Text>
            </Paper>
        );
    });
    return (
        <div className={classes.root}>
            <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
        </div>
    );
}