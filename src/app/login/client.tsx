'use client'

import Link from 'next/link'

import { useFormState } from 'react-dom'

import { login } from '@/actions/auth'
import { ActionButton } from '@/components/action-button'
import { FormError } from '@/components/form-error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function LoginClient() {
  const [state, action] = useFormState(login, null)

  return (
    <form action={action} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="m@example.com" />
        <FormError value={state?.errors.email} />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link href="/forgot" className="ml-auto inline-block text-sm underline">
            Forgot your password?
          </Link>
        </div>
        <Input id="password" name="password" type="password" />
        <FormError value={state?.errors.password} />
      </div>
      <ActionButton>Login</ActionButton>
      <Button variant="outline">Login with Google</Button>
    </form>
  )
}
