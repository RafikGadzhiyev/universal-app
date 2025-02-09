import { DynamicIcon, IconName } from 'lucide-react/dynamic'

interface IIconProps {
  name: IconName,
  color?: string,
  size?: number,
}

function Icon(props: IIconProps) {
  const {
    name,
    color,
    size,
  } = props

  return <DynamicIcon
    name={name}
    color={color}
    size={size}
  />
}

export default Icon
