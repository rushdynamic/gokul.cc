import React from 'react';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
	const filePath = path.join(
		process.cwd(),
		'public',
		'GOKUL_KRISHNAN_SYAM_RESUME_2025.pdf'
	);
	const fileBuffer = await fs.readFile(filePath);

	return new NextResponse(fileBuffer, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition':
				'attachment; filename="GOKUL_KRISHNAN_SYAM_RESUME.pdf"',
		},
	});
}
