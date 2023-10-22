import { Col as AntCol, ColProps } from 'antd'
import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

export const Col: FC<PropsWithChildren & ColProps> = ({
  children,
  xl = null,
  md = null,
  sm = null,
  lg = null,
  xs = null,
  xxl = null,
  className = '',
  ...rest
}) => {
  let props: ColProps = {}
  let specClassName = []

  if (xl === 'auto') {
    specClassName.push('flex-xl-auto')
  } else if (xl) {
    props.xl = xl
  }

  if (md === 'auto') {
    specClassName.push('flex-md-auto')
  } else if (md) {
    props.md = md
  }

  if (lg === 'auto') {
    specClassName.push('flex-lg-auto')
  } else if (lg) {
    props.lg = lg
  }

  if (xs === 'auto') {
    specClassName.push('flex-xs-auto')
  } else if (xs) {
    props.xs = xs
  }

  if (xxl === 'auto') {
    specClassName.push('flex-xxl-auto')
  } else if (xxl) {
    props.xxl = xxl
  }

  if (sm === 'auto') {
    specClassName.push('flex-sm-auto')
  } else if (sm) {
    props.sm = sm
  }

  return (
    <AntCol className={clsx(className, ...specClassName)} {...props} {...rest}>
      {children}
    </AntCol>
  )
}
