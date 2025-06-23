import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function VidCard({
    thumbnail,
    title,
    channelAvatar,
    channelName,
    views,
    date
}) {
    return (
        <Card
            sx={{
                maxWidth: 320,
                minWidth: 320,
                boxShadow: 2,
                borderRadius: 2,
                cursor: 'pointer',
                height: 340, // Set a fixed height for the card
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardMedia
                component="img"
                height="180"
                image={thumbnail}
                alt={title}
                sx={{ borderRadius: 2 }}
            />
            <CardContent
                sx={{
                    display: 'flex',
                    p: 2,
                    pb: '16px !important',
                    flex: 1,
                    alignItems: 'flex-start',
                    minHeight: 120, // Ensures consistent content height
                }}
            >
                <Avatar src={channelAvatar} sx={{ width: 40, height: 40, mr: 2 }} />
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            gutterBottom
                            sx={{
                                flex: 1,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: '1rem',
                                lineHeight: 1.2,
                                minHeight: '2.4em', // Reserve space for 2 lines
                            }}
                        >
                            {title}
                        </Typography>
                        <IconButton size="small" sx={{ ml: 1 }}>
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.95rem', lineHeight: 1.2 }}
                        noWrap
                    >
                        {channelName}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.95rem', lineHeight: 1.2 }}
                    >
                        {views} • {date}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}