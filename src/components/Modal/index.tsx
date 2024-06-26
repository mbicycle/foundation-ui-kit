import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { stringTrim } from "utils/stringTrim"

export type ModalProps = {
  children: React.ReactNode
  open: boolean
  onClose: VoidFunction
  title?: string
  classNameContent?: string
  classNameTitle?: string
}

const Modal = (props: ModalProps) => {
  const { open, onClose, title = "", classNameTitle = "", classNameContent = "", children } = props

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={stringTrim(
                  `min-w-[420px] transform rounded-2xl bg-white px-10 py-6 text-left align-middle shadow-xl transition-all ${classNameContent}`,
                )}
              >
                {title && (
                  <Dialog.Title
                    as="h3"
                    className={stringTrim(`text-lg font-medium leading-6 text-gray-900 ${classNameTitle}`)}
                  >
                    {title}
                  </Dialog.Title>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
