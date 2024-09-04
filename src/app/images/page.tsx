export default function Images({ 
    params, 
}: {
    params: { imageId: string };
}) {
    return <h1>Images: {params.imageId}</h1>
}