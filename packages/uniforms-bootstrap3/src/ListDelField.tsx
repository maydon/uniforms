import classnames from 'classnames';
import React, { ReactNode } from 'react';
import {
  HTMLFieldProps,
  connectField,
  filterDOMProps,
  joinName,
  useField,
} from 'uniforms';

export type ListDelFieldProps = HTMLFieldProps<
  unknown,
  HTMLDivElement,
  { removeIcon?: ReactNode }
>;

function ListDel({
  className,
  disabled,
  name,
  readOnly,
  removeIcon,
  ...props
}: ListDelFieldProps) {
  const nameParts = joinName(null, name);
  const nameIndex = +nameParts[nameParts.length - 1];
  const parentName = joinName(nameParts.slice(0, -1));
  const parent = useField<{ minCount?: number }, unknown[]>(
    parentName,
    {},
    { absoluteName: true },
  )[0];
  const limitNotReached =
    !disabled && !(parent.minCount! >= parent.value!.length);

  return (
    <span
      {...filterDOMProps(props)}
      className={classnames('badge', className)}
      onClick={() => {
        if (limitNotReached && !readOnly) {
          const value = parent.value!.slice();
          value.splice(nameIndex, 1);
          parent.onChange(value);
        }
      }}
    >
      {removeIcon}
    </span>
  );
}

ListDel.defaultProps = {
  removeIcon: <i className="glyphicon glyphicon-minus" />,
};

export default connectField(ListDel, { initialValue: false, kind: 'leaf' });
