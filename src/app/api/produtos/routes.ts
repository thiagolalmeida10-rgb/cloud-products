import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET() {

    const { env } = await getCloudflareContext();

    const resultado = await env.DB.prepare("SELECT * FROM produtos").all();

    return Response.json(resultado.results);
}