import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('http://3.226.79.149:3000/presale_state')

    if (!response.ok) {
      throw new Error('Failed to fetch presale state')
    }

    const data = await response.json()

    return NextResponse.json(data, { status: 200 })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
