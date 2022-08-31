import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../exports";

const Videos = ({ videos, justifyContent, direction }) => {
    
    if (!videos?.length) return "Cargando...";

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent={justifyContent} gap={2} paddingLeft={3}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
};

export default Videos;