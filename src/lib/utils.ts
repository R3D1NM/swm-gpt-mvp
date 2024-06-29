import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
<<<<<<< HEAD
    return twMerge(clsx(inputs))
=======
  return twMerge(clsx(inputs))
>>>>>>> 48b1866 ([set] initial set up with style library)
}
