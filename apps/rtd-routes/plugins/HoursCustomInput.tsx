import React from 'react'
import {Stack, Select, Label, Flex} from '@sanity/ui'
import {set, unset} from 'sanity'

const generateTimeOptions = () => {
  const times = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, '0')
      const formattedMinute = minute.toString().padStart(2, '0')
      times.push(`${formattedHour}:${formattedMinute}`)
    }
  }
  return times
}

export const HoursCustomInput = (props: any) => {
  const {onChange, value = {}} = props
  const timeOptions = generateTimeOptions()

  const handleStartTimeChange = (event: any) => {
    const newStartTime = event.target.value
    onChange(
      set({
        ...value,
        startTime: newStartTime,
      }),
    )
  }

  const handleEndTimeChange = (event: any) => {
    const newEndTime = event.target.value
    onChange(
      set({
        ...value,
        endTime: newEndTime,
      }),
    )
  }

  return (
    <Stack space={3}>
      <Flex gap={3}>
        <Stack space={2} flex={1}>
          <Label>Start Time</Label>
          <Select value={value.startTime || ''} onChange={handleStartTimeChange} fontSize={2}>
            <option value="">Select start time</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Select>
        </Stack>

        <Stack space={2} flex={1}>
          <Label>End Time</Label>
          <Select value={value.endTime || ''} onChange={handleEndTimeChange} fontSize={2}>
            <option value="">Select end time</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Select>
        </Stack>
      </Flex>
    </Stack>
  )
}
