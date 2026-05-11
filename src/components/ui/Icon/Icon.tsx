import type { ComponentType, SVGProps } from 'react'

export type IconSize = 'regular' | 'small'

const SIZE_MAP: Record<IconSize, number> = {
  regular: 20,
  small:   14,
}

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  size?: IconSize
}

export function Icon({ icon: IconComponent, size = 'regular', ...props }: IconProps) {
  const px = SIZE_MAP[size]
  return <IconComponent width={px} height={px} {...props} />
}
