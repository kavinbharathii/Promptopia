"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"

const MyProfile = () => {
	const router = useRouter()
	const { data: session } = useSession()
	const [prompts, setPrompts] = useState([])

	useEffect(() => {
		const fetchPrompt = async () => {
			try {
				const response = await fetch(`/api/users/${session?.user.id}/posts`)
				const data = await response.json()
				setPrompts(data)
			} catch (error) {
				console.log(error)
			}
		}

		if (session?.user.id) fetchPrompt()
	}, [])

	const handleEdit = (prompt) => {
		router.push(`/update-prompt?id=${prompt._id}`)
	}

	const handleDelete = async (prompt) => {
		const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

		if (hasConfirmed) {
			try {
				await fetch(`/api/prompt/${prompt._id.toString()}`, {
					method: "DELETE"
				})

				const filteredPrompts = prompts.filter((p) => p._id !== prompt._id)
				setPrompts(filteredPrompts)
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<Profile name="My" desc="Welcome to your profile" data={prompts} handleEdit={handleEdit} handleDelete={handleDelete} />
	)
}

export default MyProfile