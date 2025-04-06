import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from 'lucide-react'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of Your applied job</TableCaption>
        <TableHeader>
          <TableRow>
             <TableHead>Date</TableHead>
             <TableHead>Job Role</TableHead>
             <TableHead>Comapany Name</TableHead>
             <TableHead className="text-right" >Status</TableHead>
           </TableRow>
        </TableHeader>
        <TableBody>
          {
            
            [1 ,2,3,4,55,6,7].map((item,index)=>(
              <TableRow key={index}>
                <TableCell >17-4-2025</TableCell>
                <TableCell>FrontEnd Developer</TableCell>
                <TableCell>Google</TableCell>
                <TableCell className="text-right" ><Badge>Selected</Badge></TableCell>

              </TableRow>
            ))

          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
