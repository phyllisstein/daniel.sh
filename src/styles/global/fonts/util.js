import R from 'ramda'

export const getWOFFs = R.pipe(
  R.pluck('node'),
  R.groupBy(R.prop('name')),
  R.map(
    R.pipe(
      R.indexBy(
        R.pipe(
          R.prop('ext'),
          R.replace('.', ''),
        ),
      ),
      R.pluck('publicURL'),
    ),
  ),
)
