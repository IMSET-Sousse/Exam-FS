"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function TeachersFilter() {
  const [priceRange, setPriceRange] = useState([20, 100])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Filters</h3>
        <Button variant="outline" size="sm" className="w-full">
          Reset Filters
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["subjects", "price", "rating", "availability"]}>
        <AccordionItem value="subjects">
          <AccordionTrigger>Subjects</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Mathematics", "Programming", "Languages", "Music", "Art", "Science", "Fitness", "Geography"].map(
                (subject) => (
                  <div key={subject} className="flex items-center space-x-2">
                    <Checkbox id={`subject-${subject.toLowerCase()}`} />
                    <label
                      htmlFor={`subject-${subject.toLowerCase()}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {subject}
                    </label>
                  </div>
                ),
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[20, 100]} max={200} step={5} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span className="text-sm">€{priceRange[0]}</span>
                <span className="text-sm">€{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {rating}+ Stars
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Weekdays", "Weekends", "Mornings", "Afternoons", "Evenings"].map((time) => (
                <div key={time} className="flex items-center space-x-2">
                  <Checkbox id={`time-${time.toLowerCase()}`} />
                  <label
                    htmlFor={`time-${time.toLowerCase()}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {time}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Online", "In-person", "Both"].map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox id={`location-${location.toLowerCase()}`} />
                  <label
                    htmlFor={`location-${location.toLowerCase()}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
