import React from 'react'
import ProfileInfo from './components/profile-info';
import NewDM from './components/new-dm';
import { useEffect } from 'react';
import { apiClient } from '../../../../lib/api-client';
import { GET_DM_CONTACTS_ROUTE, GET_USER_CHANNELS_ROUTE } from '../../../../utils/constant';
import { userAppStore } from '../../../../store';
import ContactList from '../../../../components/contact-list';
import CreateChannel from './components/create-channel';

const ContactsContainer = () => {

  const {directMessagesContacts, setDirectMessagesContacts, channels, setChannels} = userAppStore()

  useEffect(() => {

    const getContacts = async() => {
      const response = await apiClient.get(GET_DM_CONTACTS_ROUTE, {withCredentials: true})

      if(response.data.contacts){
        setDirectMessagesContacts(response.data.contacts)
      }
    }

     const getChannels = async() => {
      const response = await apiClient.get(GET_USER_CHANNELS_ROUTE, {withCredentials: true})

      if(response.data.channels){
        setChannels(response.data.channels)
      }
    }

      getContacts()
      getChannels()
  },[setChannels, setDirectMessagesContacts])
  return (
    <div className='relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full'>
        <div className='pt-3'>
            <Logo />
        </div>
        <div className='my-5'>
            <div className='flex items-center justify-between pr-10'>
            <Title text="Direct Messages"/>
            <NewDM />
            </div>
            <div className='max-h-[38vh] overflow-y-auto scrollbar-hidden'>
              <ContactList contacts={directMessagesContacts} />
            </div>
        </div>
        <div className='my-5'>
            <div className='flex items-center justify-between pr-25'>
            <Title text="Channels"/>
            <CreateChannel />
            </div>
             <div className='max-h-[38vh] overflow-y-auto scrollbar-hidden'>
              <ContactList contacts={channels} isChannel={true}/>
            </div>
        </div>
        <ProfileInfo />
    </div>
  )
}

export default ContactsContainer


const Logo = () => {
  return (
    <div className="flex p-5 items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle with layered gradient chat bubble */}
        <circle cx="50" cy="50" r="48" fill="#8338ec" />
        <path
          d="M30 35C30 30 34 25 40 25H60C66 25 70 30 70 35V55C70 60 66 65 60 65H45L35 75V65H40C34 65 30 60 30 55V35Z"
          fill="white"
        />
        <circle cx="42" cy="45" r="4" fill="#8338ec" />
        <circle cx="50" cy="45" r="4" fill="#8338ec" />
        <circle cx="58" cy="45" r="4" fill="#8338ec" />
      </svg>
      <span className="text-3xl font-bold text-white tracking-tight">
        Zynk
        <span className="text-purple-400">Up</span>
      </span>
    </div>
  );
};

const Title = ({text}) => {
    return(
        <h6 className='uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm'>
            {text}
        </h6>
    )
}
