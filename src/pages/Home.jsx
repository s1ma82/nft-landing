import { BigBanner, StatsBlock, Title } from "../components"

export default () => {
    return (
        <>
            <BigBanner description='Это описание'>Create Your Own NFT Dream Gallery </BigBanner>
            <StatsBlock data={[
                { name: "Artwork", value: "25.1k" },
                { name: "Artist", value: "15.6k" },
                { name: "Auction", value: "10.2k" }
            ]} />
            <Title>Super Hot Drop</Title>
        </>
    )
}