import { ImageResponse } from 'next/og'
import { join } from 'path'
import { readFileSync } from 'fs'

export const runtime = 'nodejs'
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
    // Read the image from the public directory
    const filePath = join(process.cwd(), 'public', 'avik.jpg')
    const file = readFileSync(filePath)
    const src = `data:image/jpeg;base64,${file.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: 'transparent', // Ensure background is transparent
                }}
            >
                <img
                    src={src}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
