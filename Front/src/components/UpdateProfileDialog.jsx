import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { DialogFooter, DialogHeader } from './ui/dialog'
import { Label } from '@radix-ui/react-label'
import { Loader2, X } from 'lucide-react'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { setUser } from '@/redux/authSlice'
const UpdateProfileDialog = ({ open, setOpen }) => {
      const [loading, setLoading] = useState(false);
      const { user } = useSelector(store => store.auth);
      const [input, setInput] = useState({
            fullname: user?.fullname||"",
            email: user?.email||"",
            phoneNumber: user?.phoneNumber||"",
            bio: user?.profile?.bio || "",

            skills: user?.profile?.skills?.join(",") || "",
            file: user?.profile?.resume||null,
      })
      const dispatch = useDispatch();
      const changeEventHandler = (e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
      }
      const fileChangeHandler = (e) => {
            const file = e.target.files?.[0];
            setInput({ ...input, file });
      }
      const submitHandler = async (e) => {
            e.preventDefault();
        
            const formData = new FormData();
            formData.append("fullname", input.fullname || "");
            formData.append("email", input.email || "");
            formData.append("phoneNumber", input.phoneNumber || "");
            formData.append("bio", input.bio || "");
            formData.append("skills", input.skills || "");
            if (input.file) {
                formData.append("file", input.file);
            }
        
            setLoading(true);
            try {
                const res = await axios.put(`${USER_API_END_POINT}/profile/update`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${user?.token}`,
                    },
                    withCredentials: true,
                });
        
                if (res.data.success) {
                    dispatch(setUser(res.data.user));
                    console.log(input);
                    toast.success(res.data.message);
                }
            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.message || "Something went wrong");
            } finally {
                  setLoading(false);
                  setOpen(false);
              }
        };
        
      return (
            <div>
                  <Dialog open={open}>
                        <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg sm:max-w-[425px]"
                              onInteractOutside={() => setOpen(false)}>
                              <DialogHeader>
                                    <DialogTitle>
                                          Update Profile
                                    </DialogTitle>
                                    <DialogClose asChild>
                                          <button
                                                onClick={() => setOpen(false)}
                                                className="text-gray-500 hover:text-black"
                                                aria-label="Close"
                                          >
                                                <X className="   w-5 h-5" />
                                          </button>
                                    </DialogClose>
                                    <DialogDescription>
                                          Update your profile information, including your name, email, contact number, and skills.
                                    </DialogDescription>
                              </DialogHeader>
                              <form onSubmit={submitHandler}>
                                    <div className='grid gap-4 py-4'>
                                          <div className='grid grid-cols-4 items-center gap-4'>
                                                <Label htmlFor="name" className='text-right'>Name</Label>
                                                {/* <input type="text" id="fullname" name="fullname" value={input.fullname} onChange={changeEventHandler} className="col-span-3" /> */}
                                                <input type="text" name="fullname" value={input.fullname} onChange={changeEventHandler} id='fullname' className='col-span-3' />
                                          </div>
                                          <div className='grid grid-cols-4 items-center gap-4'>
                                                <Label htmlFor="Email" className='text-right'>Email</Label>
                                                <input type="email" name='email' value={input.email} onChange={changeEventHandler} id='email' className='col-span-3' />
                                          </div>
                                          <div className='grid grid-cols-4 items-center gap-4'>
                                                <Label htmlFor="number" className='text-right'>Number</Label>
                                                <input type="number" name='phoneNumber' value={input.phoneNumber} onChange={changeEventHandler} id='phoneNumber' className='col-span-3' />
                                          </div>
                                          <div className='grid grid-cols-4 items-center gap-4'>
                                                <Label htmlFor="bio" className='text-right'>Bio</Label>
                                                <input type="bio" name='bio' value={input.bio} id='bio' onChange={changeEventHandler} className='col-span-3' />
                                          </div>
                                          <div className='grid grid-cols-4 items-center gap-4'>
                                                <Label htmlFor="skills" className='text-right'>Skills</Label>
                                                <input type="skills" name='skills' id='skills' onChange={changeEventHandler} value={input.skills} className='col-span-3' />
                                          </div>
                                          <div className='grid grid-cols-4 items-center gap-4'>
                                                <Label htmlFor="file" className='text-right'>Resume</Label>
                                                <input type="file"   id='file' onChange={fileChangeHandler} accept='application/pdf' className='col-span-3' />
                                          </div>
                                    </div>
                                    <DialogFooter>
                                          {loading ? (
                                                <Button className="w-full my-4">
                                                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                      Please Wait
                                                </Button>
                                          ) : (
                                                <Button type="submit" className="w-full my-4">
                                                      Update
                                                </Button>
                                          )}
                                    </DialogFooter>
                              </form>
                        </DialogContent>
                  </Dialog>
            </div>
      )
}

export default UpdateProfileDialog
