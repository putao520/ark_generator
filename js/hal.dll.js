const memory = require("./MemoryBuffer.js");
const hal_dll = {
    static base = findDriver("hal.dll"),
    static name = "hal.dll",
    structs: {

        LIST_ENTRY64: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Flink() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Blink() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        LIST_ENTRY32: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Flink() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Blink() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        _LIST_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Flink() {

                return this.#buffer.pointer(0);
            }

            Blink() {

                return this.#buffer.pointer(8);
            }

        }
        _SINGLE_LIST_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Next() {

                return this.#buffer.pointer(0);
            }

        }
        _UNICODE_STRING: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            MaximumLength() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Buffer() {

                return this.#buffer.pointer(8);
            }

        }
        _STRING: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            MaximumLength() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Buffer() {

                return this.#buffer.pointer(8);
            }

        }
        _RTL_QUERY_REGISTRY_TABLE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 56);
            }

        ,

            QueryRoutine() {

                return this.#buffer.pointer(0);
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Name() {

                return this.#buffer.pointer(16);
            }

            EntryContext() {

                return this.#buffer.pointer(24);
            }

            DefaultType() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            DefaultData() {

                return this.#buffer.pointer(40);
            }

            DefaultLength() {


                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();
            }

        }
        __unnamed_108e: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            LowPart() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            HighPart() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        __unnamed_1093: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            LowPart() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            HighPart() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        _RTL_BITMAP: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            SizeOfBitMap() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Buffer() {

                return this.#buffer.pointer(8);
            }

        }
        _KFLOATING_SAVE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            Dummy() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

        }
        _EXT_SET_PARAMETERS_V0: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Version() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            NoWakeTolerance() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        _FAST_MUTEX: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 56);
            }

        ,

            Count() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Owner() {

                return this.#buffer.pointer(8);
            }

            Contention() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Event() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Header() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Lock() {
                                return '这是修改!'
                            }

                            LockNV() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Signalling() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            TimerType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            TimerControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Absolute() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Wake() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            EncodedTolerableDelay() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            Hand() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            TimerMiscFlags() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            Index() {

                                return this.#buffer.bits().rd(0, 6);

                            }

                            Inserted() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            Expired() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            Timer2Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Timer2Flags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Timer2Inserted() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Timer2Expiring() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Timer2CancelPending() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Timer2SetPending() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Timer2Running() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            Timer2Disabled() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            Timer2ReservedFlags() {

                                return this.#buffer.bits().rd(6, 2);

                            }

                            Timer2ComponentId() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Timer2RelativeId() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            QueueType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            QueueControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Abandoned() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            DisableIncrement() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            QueueReservedControlFlags() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            QueueSize() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            QueueReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ThreadType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            ThreadReserved() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            ThreadControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            CycleProfiling() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            CounterProfiling() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            GroupScheduling() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            AffinitySet() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Tagged() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            EnergyProfiling() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            SchedulerAssist() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            ThreadReservedControlFlags() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            DebugActive() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ActiveDR7() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Instrumented() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Minimal() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved4() {

                                return this.#buffer.bits().rd(3, 3);

                            }

                            UmsScheduled() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            UmsPrimary() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            MutantType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            MutantSize() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            DpcActive() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            MutantReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            SignalState() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            WaitListHead() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            OldIrql() {


                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();
            }

        }
        _KEVENT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Header() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Lock() {
                        return '这是修改!'
                    }

                    LockNV() {
                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Type() {
                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    Signalling() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    Size() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    Reserved1() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    TimerType() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    TimerControlFlags() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    Absolute() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    Wake() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    EncodedTolerableDelay() {

                        return this.#buffer.bits().rd(2, 6);

                    }

                    Hand() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    TimerMiscFlags() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Index() {

                        return this.#buffer.bits().rd(0, 6);

                    }

                    Inserted() {

                        return this.#buffer.bits().rd(6, 1);

                    }

                    Expired() {

                        return this.#buffer.bits().rd(7, 1);

                    }

                    Timer2Type() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    Timer2Flags() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    Timer2Inserted() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    Timer2Expiring() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    Timer2CancelPending() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    Timer2SetPending() {

                        return this.#buffer.bits().rd(3, 1);

                    }

                    Timer2Running() {

                        return this.#buffer.bits().rd(4, 1);

                    }

                    Timer2Disabled() {

                        return this.#buffer.bits().rd(5, 1);

                    }

                    Timer2ReservedFlags() {

                        return this.#buffer.bits().rd(6, 2);

                    }

                    Timer2ComponentId() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    Timer2RelativeId() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    QueueType() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    QueueControlFlags() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    Abandoned() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    DisableIncrement() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    QueueReservedControlFlags() {

                        return this.#buffer.bits().rd(2, 6);

                    }

                    QueueSize() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    QueueReserved() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    ThreadType() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    ThreadReserved() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    ThreadControlFlags() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    CycleProfiling() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    CounterProfiling() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    GroupScheduling() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    AffinitySet() {

                        return this.#buffer.bits().rd(3, 1);

                    }

                    Tagged() {

                        return this.#buffer.bits().rd(4, 1);

                    }

                    EnergyProfiling() {

                        return this.#buffer.bits().rd(5, 1);

                    }

                    SchedulerAssist() {

                        return this.#buffer.bits().rd(6, 1);

                    }

                    ThreadReservedControlFlags() {

                        return this.#buffer.bits().rd(7, 1);

                    }

                    DebugActive() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    ActiveDR7() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    Instrumented() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    Minimal() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    Reserved4() {

                        return this.#buffer.bits().rd(3, 3);

                    }

                    UmsScheduled() {

                        return this.#buffer.bits().rd(6, 1);

                    }

                    UmsPrimary() {

                        return this.#buffer.bits().rd(7, 1);

                    }

                    MutantType() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    MutantSize() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    DpcActive() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    MutantReserved() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    SignalState() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    WaitListHead() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 8)
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

        }
        _LOOKASIDE_LIST_EX: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 96);
            }

        ,

            L() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 96);
                    }

                ,

                    ListHead() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Alignment() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            Region() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                            HeaderX64() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Depth() {

                                        return this.#buffer.bits().rd(0, 16);

                                    }

                                    Sequence() {

                                        return this.#buffer.bits().rd(16, 48);

                                    }

                                    Reserved() {

                                        return this.#buffer.bits().rd(0, 4);

                                    }

                                    NextEntry() {

                                        return this.#buffer.bits().rd(4, 60);

                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SingleListHead() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Next() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Depth() {


                        const b = new DataView(this.#buffer.read(2, 16), 0);
                        return b.getUint16();
                    }

                    MaximumDepth() {


                        const b = new DataView(this.#buffer.read(2, 18), 0);
                        return b.getUint16();
                    }

                    TotalAllocates() {


                        const b = new DataView(this.#buffer.read(4, 20), 0);
                        return b.getUint32();
                    }

                    AllocateMisses() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    AllocateHits() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    TotalFrees() {


                        const b = new DataView(this.#buffer.read(4, 28), 0);
                        return b.getUint32();
                    }

                    FreeMisses() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    FreeHits() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    Type() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 36), 0);
                        return b.getUint32();

                    }

                    Tag() {


                        const b = new DataView(this.#buffer.read(4, 40), 0);
                        return b.getUint32();
                    }

                    Size() {


                        const b = new DataView(this.#buffer.read(4, 44), 0);
                        return b.getUint32();
                    }

                    AllocateEx() {

                        return this.#buffer.pointer(48);
                    }

                    Allocate() {

                        return this.#buffer.pointer(48);
                    }

                    FreeEx() {

                        return this.#buffer.pointer(56);
                    }

                    Free() {

                        return this.#buffer.pointer(56);
                    }

                    ListEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 64)
                    }

                    LastTotalAllocates() {


                        const b = new DataView(this.#buffer.read(4, 80), 0);
                        return b.getUint32();
                    }

                    LastAllocateMisses() {


                        const b = new DataView(this.#buffer.read(4, 84), 0);
                        return b.getUint32();
                    }

                    LastAllocateHits() {


                        const b = new DataView(this.#buffer.read(4, 84), 0);
                        return b.getUint32();
                    }

                    Future(arg) {

                        // array
                        return this.#buffer.read(4, (88 + (4 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

        }
        _SLIST_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Next() {

                return this.#buffer.pointer(0);
            }

        }
        __unnamed_10d1: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Depth() {

                return this.#buffer.bits().rd(0, 16);

            }

            Sequence() {

                return this.#buffer.bits().rd(16, 48);

            }

            Reserved() {

                return this.#buffer.bits().rd(0, 4);

            }

            NextEntry() {

                return this.#buffer.bits().rd(4, 60);

            }

        }
        _NPAGED_LOOKASIDE_LIST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 128);
            }

        ,

            L() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 128);
                    }

                ,

                    ListHead() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Alignment() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            Region() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                            HeaderX64() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Depth() {

                                        return this.#buffer.bits().rd(0, 16);

                                    }

                                    Sequence() {

                                        return this.#buffer.bits().rd(16, 48);

                                    }

                                    Reserved() {

                                        return this.#buffer.bits().rd(0, 4);

                                    }

                                    NextEntry() {

                                        return this.#buffer.bits().rd(4, 60);

                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SingleListHead() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Next() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Depth() {


                        const b = new DataView(this.#buffer.read(2, 16), 0);
                        return b.getUint16();
                    }

                    MaximumDepth() {


                        const b = new DataView(this.#buffer.read(2, 18), 0);
                        return b.getUint16();
                    }

                    TotalAllocates() {


                        const b = new DataView(this.#buffer.read(4, 20), 0);
                        return b.getUint32();
                    }

                    AllocateMisses() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    AllocateHits() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    TotalFrees() {


                        const b = new DataView(this.#buffer.read(4, 28), 0);
                        return b.getUint32();
                    }

                    FreeMisses() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    FreeHits() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    Type() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 36), 0);
                        return b.getUint32();

                    }

                    Tag() {


                        const b = new DataView(this.#buffer.read(4, 40), 0);
                        return b.getUint32();
                    }

                    Size() {


                        const b = new DataView(this.#buffer.read(4, 44), 0);
                        return b.getUint32();
                    }

                    AllocateEx() {

                        return this.#buffer.pointer(48);
                    }

                    Allocate() {

                        return this.#buffer.pointer(48);
                    }

                    FreeEx() {

                        return this.#buffer.pointer(56);
                    }

                    Free() {

                        return this.#buffer.pointer(56);
                    }

                    ListEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 64)
                    }

                    LastTotalAllocates() {


                        const b = new DataView(this.#buffer.read(4, 80), 0);
                        return b.getUint32();
                    }

                    LastAllocateMisses() {


                        const b = new DataView(this.#buffer.read(4, 84), 0);
                        return b.getUint32();
                    }

                    LastAllocateHits() {


                        const b = new DataView(this.#buffer.read(4, 84), 0);
                        return b.getUint32();
                    }

                    Future(arg) {

                        // array
                        return this.#buffer.read(4, (88 + (4 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

        }
        _PAGED_LOOKASIDE_LIST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 128);
            }

        ,

            L() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 128);
                    }

                ,

                    ListHead() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Alignment() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            Region() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                            HeaderX64() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Depth() {

                                        return this.#buffer.bits().rd(0, 16);

                                    }

                                    Sequence() {

                                        return this.#buffer.bits().rd(16, 48);

                                    }

                                    Reserved() {

                                        return this.#buffer.bits().rd(0, 4);

                                    }

                                    NextEntry() {

                                        return this.#buffer.bits().rd(4, 60);

                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SingleListHead() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Next() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Depth() {


                        const b = new DataView(this.#buffer.read(2, 16), 0);
                        return b.getUint16();
                    }

                    MaximumDepth() {


                        const b = new DataView(this.#buffer.read(2, 18), 0);
                        return b.getUint16();
                    }

                    TotalAllocates() {


                        const b = new DataView(this.#buffer.read(4, 20), 0);
                        return b.getUint32();
                    }

                    AllocateMisses() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    AllocateHits() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    TotalFrees() {


                        const b = new DataView(this.#buffer.read(4, 28), 0);
                        return b.getUint32();
                    }

                    FreeMisses() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    FreeHits() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    Type() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 36), 0);
                        return b.getUint32();

                    }

                    Tag() {


                        const b = new DataView(this.#buffer.read(4, 40), 0);
                        return b.getUint32();
                    }

                    Size() {


                        const b = new DataView(this.#buffer.read(4, 44), 0);
                        return b.getUint32();
                    }

                    AllocateEx() {

                        return this.#buffer.pointer(48);
                    }

                    Allocate() {

                        return this.#buffer.pointer(48);
                    }

                    FreeEx() {

                        return this.#buffer.pointer(56);
                    }

                    Free() {

                        return this.#buffer.pointer(56);
                    }

                    ListEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 64)
                    }

                    LastTotalAllocates() {


                        const b = new DataView(this.#buffer.read(4, 80), 0);
                        return b.getUint32();
                    }

                    LastAllocateMisses() {


                        const b = new DataView(this.#buffer.read(4, 84), 0);
                        return b.getUint32();
                    }

                    LastAllocateHits() {


                        const b = new DataView(this.#buffer.read(4, 84), 0);
                        return b.getUint32();
                    }

                    Future(arg) {

                        // array
                        return this.#buffer.read(4, (88 + (4 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

        }
        _WORK_QUEUE_ITEM: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            List() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            WorkerRoutine() {

                return this.#buffer.pointer(16);
            }

            Parameter() {

                return this.#buffer.pointer(24);
            }

        }
        _EXT_DELETE_PARAMETERS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Version() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            DeleteCallback() {

                return this.#buffer.pointer(8);
            }

            DeleteContext() {

                return this.#buffer.pointer(16);
            }

        }
        _MDL: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 48);
            }

        ,

            Next() {

                return this.#buffer.pointer(0);
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 8), 0);
                return b.getUint16();
            }

            MdlFlags() {


                const b = new DataView(this.#buffer.read(2, 10), 0);
                return b.getUint16();
            }

            Process() {

                return this.#buffer.pointer(16);
            }

            MappedSystemVa() {

                return this.#buffer.pointer(24);
            }

            StartVa() {

                return this.#buffer.pointer(32);
            }

            ByteCount() {


                const b = new DataView(this.#buffer.read(4, 40), 0);
                return b.getUint32();
            }

            ByteOffset() {


                const b = new DataView(this.#buffer.read(4, 44), 0);
                return b.getUint32();
            }

        }
        __unnamed_111d: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            UserApcRoutine() {

                return this.#buffer.pointer(0);
            }

            IssuingProcess() {

                return this.#buffer.pointer(0);
            }

            UserApcContext() {

                return this.#buffer.pointer(8);
            }

        }
        __unnamed_112c: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 80);
            }

        ,

            DeviceQueueEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    DeviceListEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SortKey() {


                        const b = new DataView(this.#buffer.read(4, 16), 0);
                        return b.getUint32();
                    }

                    Inserted() {


                        const b = new DataView(this.#buffer.read(1, 20), 0);
                        return b.getUint8();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            DriverContext(arg) {

                // array
                return this.#buffer.read(8, (0 + (8 * arg));

            }

            Thread() {

                return this.#buffer.pointer(32);
            }

            AuxiliaryBuffer() {

                return this.#buffer.pointer(40);
            }

            ListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 48)
            }

            CurrentStackLocation() {

                return this.#buffer.pointer(64);
            }

            PacketType() {


                const b = new DataView(this.#buffer.read(4, 64), 0);
                return b.getUint32();
            }

            OriginalFileObject() {

                return this.#buffer.pointer(72);
            }

        }
        _IRP: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 208);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            MdlAddress() {

                return this.#buffer.pointer(8);
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            AssociatedIrp() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    MasterIrp() {

                        return this.#buffer.pointer(0);
                    }

                    IrpCount() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    SystemBuffer() {

                        return this.#buffer.pointer(0);
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            ThreadListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 32)
            }

            IoStatus() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Status() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Pointer() {

                        return this.#buffer.pointer(0);
                    }

                    Information() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 48)
            }

            RequestorMode() {


                const b = new DataView(this.#buffer.read(1, 64), 0);
                return b.getUint8();
            }

            PendingReturned() {


                const b = new DataView(this.#buffer.read(1, 65), 0);
                return b.getUint8();
            }

            StackCount() {


                const b = new DataView(this.#buffer.read(1, 66), 0);
                return b.getUint8();
            }

            CurrentLocation() {


                const b = new DataView(this.#buffer.read(1, 67), 0);
                return b.getUint8();
            }

            Cancel() {


                const b = new DataView(this.#buffer.read(1, 68), 0);
                return b.getUint8();
            }

            CancelIrql() {


                const b = new DataView(this.#buffer.read(1, 69), 0);
                return b.getUint8();
            }

            ApcEnvironment() {


                const b = new DataView(this.#buffer.read(1, 70), 0);
                return b.getUint8();
            }

            AllocationFlags() {


                const b = new DataView(this.#buffer.read(1, 71), 0);
                return b.getUint8();
            }

            UserIosb() {

                return this.#buffer.pointer(72);
            }

            UserEvent() {

                return this.#buffer.pointer(80);
            }

            Overlay() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    AsynchronousParameters() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            UserApcRoutine() {

                                return this.#buffer.pointer(0);
                            }

                            IssuingProcess() {

                                return this.#buffer.pointer(0);
                            }

                            UserApcContext() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    AllocationSize() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 88)
            }

            CancelRoutine() {

                return this.#buffer.pointer(104);
            }

            UserBuffer() {

                return this.#buffer.pointer(112);
            }

            Tail() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 88);
                    }

                ,

                    Overlay() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 80);
                            }

                        ,

                            DeviceQueueEntry() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 24);
                                    }

                                ,

                                    DeviceListEntry() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 16);
                                            }

                                        ,

                                            Flink() {

                                                return this.#buffer.pointer(0);
                                            }

                                            Blink() {

                                                return this.#buffer.pointer(8);
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    SortKey() {


                                        const b = new DataView(this.#buffer.read(4, 16), 0);
                                        return b.getUint32();
                                    }

                                    Inserted() {


                                        const b = new DataView(this.#buffer.read(1, 20), 0);
                                        return b.getUint8();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            DriverContext(arg) {

                                // array
                                return this.#buffer.read(8, (0 + (8 * arg));

                            }

                            Thread() {

                                return this.#buffer.pointer(32);
                            }

                            AuxiliaryBuffer() {

                                return this.#buffer.pointer(40);
                            }

                            ListEntry() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 48)
                            }

                            CurrentStackLocation() {

                                return this.#buffer.pointer(64);
                            }

                            PacketType() {


                                const b = new DataView(this.#buffer.read(4, 64), 0);
                                return b.getUint32();
                            }

                            OriginalFileObject() {

                                return this.#buffer.pointer(72);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Apc() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 88);
                            }

                        ,

                            Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            SpareByte0() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            SpareByte1() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            SpareLong0() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Thread() {

                                return this.#buffer.pointer(8);
                            }

                            ApcListEntry() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                            Reserved(arg) {

                                // array
                                return this.#buffer.read(8, (32 + (8 * arg));

                            }

                            NormalContext() {

                                return this.#buffer.pointer(56);
                            }

                            SystemArgument1() {

                                return this.#buffer.pointer(64);
                            }

                            SystemArgument2() {

                                return this.#buffer.pointer(72);
                            }

                            ApcStateIndex() {


                                const b = new DataView(this.#buffer.read(1, 80), 0);
                                return b.getUint8();
                            }

                            ApcMode() {


                                const b = new DataView(this.#buffer.read(1, 81), 0);
                                return b.getUint8();
                            }

                            Inserted() {


                                const b = new DataView(this.#buffer.read(1, 82), 0);
                                return b.getUint8();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    CompletionKey() {

                        return this.#buffer.pointer(0);
                    }

                }
                return new cls(this.#buffer.address() + 120)
            }

        }
        __unnamed_1136: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            SecurityContext() {

                return this.#buffer.pointer(0);
            }

            Options() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            FileAttributes() {


                const b = new DataView(this.#buffer.read(2, 16), 0);
                return b.getUint16();
            }

            ShareAccess() {


                const b = new DataView(this.#buffer.read(2, 18), 0);
                return b.getUint16();
            }

            EaLength() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

        }
        __unnamed_113a: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            SecurityContext() {

                return this.#buffer.pointer(0);
            }

            Options() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(2, 16), 0);
                return b.getUint16();
            }

            ShareAccess() {


                const b = new DataView(this.#buffer.read(2, 18), 0);
                return b.getUint16();
            }

            Parameters() {

                return this.#buffer.pointer(24);
            }

        }
        __unnamed_113e: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            SecurityContext() {

                return this.#buffer.pointer(0);
            }

            Options() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(2, 16), 0);
                return b.getUint16();
            }

            ShareAccess() {


                const b = new DataView(this.#buffer.read(2, 18), 0);
                return b.getUint16();
            }

            Parameters() {

                return this.#buffer.pointer(24);
            }

        }
        __unnamed_1140: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Key() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            ByteOffset() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

        }
        __unnamed_1144: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            FileName() {

                return this.#buffer.pointer(8);
            }

            FileInformationClass() {

                // enum
                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();

            }

            FileIndex() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

        }
        __unnamed_1146: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            CompletionFilter() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_114a: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            CompletionFilter() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            DirectoryNotifyInformationClass() {

                // enum
                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();

            }

        }
        __unnamed_114c: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            FileInformationClass() {

                // enum
                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();

            }

        }
        __unnamed_114e: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            FileInformationClass() {

                // enum
                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();

            }

            FileObject() {

                return this.#buffer.pointer(16);
            }

            ReplaceIfExists() {


                const b = new DataView(this.#buffer.read(1, 24), 0);
                return b.getUint8();
            }

            AdvanceOnly() {


                const b = new DataView(this.#buffer.read(1, 25), 0);
                return b.getUint8();
            }

            ClusterCount() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            DeleteHandle() {

                return this.#buffer.pointer(24);
            }

        }
        __unnamed_1150: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            EaList() {

                return this.#buffer.pointer(8);
            }

            EaListLength() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            EaIndex() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

        }
        __unnamed_1152: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

        }
        __unnamed_1156: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            FsInformationClass() {

                // enum
                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();

            }

        }
        __unnamed_1158: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            OutputBufferLength() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            InputBufferLength() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            FsControlCode() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Type3InputBuffer() {

                return this.#buffer.pointer(24);
            }

        }
        __unnamed_115b: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Length() {

                return this.#buffer.pointer(0);
            }

            Key() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            ByteOffset() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

        }
        __unnamed_115d: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            OutputBufferLength() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            InputBufferLength() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            IoControlCode() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Type3InputBuffer() {

                return this.#buffer.pointer(24);
            }

        }
        __unnamed_115f: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            SecurityInformation() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_1161: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            SecurityInformation() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            SecurityDescriptor() {

                return this.#buffer.pointer(8);
            }

        }
        __unnamed_1165: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Vpb() {

                return this.#buffer.pointer(0);
            }

            DeviceObject() {

                return this.#buffer.pointer(8);
            }

        }
        __unnamed_1169: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Srb() {

                return this.#buffer.pointer(0);
            }

        }
        __unnamed_116d: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            StartSid() {

                return this.#buffer.pointer(8);
            }

            SidList() {

                return this.#buffer.pointer(16);
            }

            SidListLength() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

        }
        __unnamed_1171: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            Type() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

        }
        __unnamed_1178: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            InterfaceType() {

                return this.#buffer.pointer(0);
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 8), 0);
                return b.getUint16();
            }

            Version() {


                const b = new DataView(this.#buffer.read(2, 10), 0);
                return b.getUint16();
            }

            Interface() {

                return this.#buffer.pointer(16);
            }

            InterfaceSpecificData() {

                return this.#buffer.pointer(24);
            }

        }
        __unnamed_117c: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Capabilities() {

                return this.#buffer.pointer(0);
            }

        }
        __unnamed_1180: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            IoResourceRequirementList() {

                return this.#buffer.pointer(0);
            }

        }
        __unnamed_1182: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            WhichSpace() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Buffer() {

                return this.#buffer.pointer(8);
            }

            Offset() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

        }
        __unnamed_1184: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 1);
            }

        ,

            Lock() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

        }
        __unnamed_1188: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            IdType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

        }
        __unnamed_118c: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            DeviceTextType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

            LocaleId() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_1191: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            InPath() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Reserved(arg) {

                // array
                return this.#buffer.read(1, (1 + (1 * arg));

            }

            Type() {

                // enum
                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();

            }

        }
        __unnamed_1195: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            PowerState() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

        }
        __unnamed_1199: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            PowerSequence() {

                return this.#buffer.pointer(0);
            }

        }
        __unnamed_11a1: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            SystemContext() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            SystemPowerStateContext() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 4);
                    }

                ,

                    Reserved1() {

                        return this.#buffer.bits().rd(0, 8);

                    }

                    TargetSystemState() {

                        return this.#buffer.bits().rd(8, 4);

                    }

                    EffectiveSystemState() {

                        return this.#buffer.bits().rd(12, 4);

                    }

                    CurrentSystemState() {

                        return this.#buffer.bits().rd(16, 4);

                    }

                    IgnoreHibernationPath() {

                        return this.#buffer.bits().rd(20, 1);

                    }

                    PseudoTransition() {

                        return this.#buffer.bits().rd(21, 1);

                    }

                    KernelSoftReboot() {

                        return this.#buffer.bits().rd(22, 1);

                    }

                    DirectedDripsTransition() {

                        return this.#buffer.bits().rd(23, 1);

                    }

                    Reserved2() {

                        return this.#buffer.bits().rd(24, 8);

                    }

                    ContextAsUlong() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Type() {

                // enum
                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();

            }

            State() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 4);
                    }

                ,

                    SystemState() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();

                    }

                    DeviceState() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();

                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            ShutdownType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();

            }

        }
        __unnamed_11a5: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            AllocatedResources() {

                return this.#buffer.pointer(0);
            }

            AllocatedResourcesTranslated() {

                return this.#buffer.pointer(8);
            }

        }
        __unnamed_11a7: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            ProviderId() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            DataPath() {

                return this.#buffer.pointer(8);
            }

            BufferSize() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Buffer() {

                return this.#buffer.pointer(24);
            }

        }
        __unnamed_11a9: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Argument1() {

                return this.#buffer.pointer(0);
            }

            Argument2() {

                return this.#buffer.pointer(8);
            }

            Argument3() {

                return this.#buffer.pointer(16);
            }

            Argument4() {

                return this.#buffer.pointer(24);
            }

        }
        _IO_STACK_LOCATION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 72);
            }

        ,

            MajorFunction() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            MinorFunction() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Control() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            Parameters() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 32);
                    }

                ,

                    Create() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            SecurityContext() {

                                return this.#buffer.pointer(0);
                            }

                            Options() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            FileAttributes() {


                                const b = new DataView(this.#buffer.read(2, 16), 0);
                                return b.getUint16();
                            }

                            ShareAccess() {


                                const b = new DataView(this.#buffer.read(2, 18), 0);
                                return b.getUint16();
                            }

                            EaLength() {


                                const b = new DataView(this.#buffer.read(4, 24), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    CreatePipe() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            SecurityContext() {

                                return this.#buffer.pointer(0);
                            }

                            Options() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            Reserved() {


                                const b = new DataView(this.#buffer.read(2, 16), 0);
                                return b.getUint16();
                            }

                            ShareAccess() {


                                const b = new DataView(this.#buffer.read(2, 18), 0);
                                return b.getUint16();
                            }

                            Parameters() {

                                return this.#buffer.pointer(24);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    CreateMailslot() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            SecurityContext() {

                                return this.#buffer.pointer(0);
                            }

                            Options() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            Reserved() {


                                const b = new DataView(this.#buffer.read(2, 16), 0);
                                return b.getUint16();
                            }

                            ShareAccess() {


                                const b = new DataView(this.#buffer.read(2, 18), 0);
                                return b.getUint16();
                            }

                            Parameters() {

                                return this.#buffer.pointer(24);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Read() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Key() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            Flags() {


                                const b = new DataView(this.#buffer.read(4, 12), 0);
                                return b.getUint32();
                            }

                            ByteOffset() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Write() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Key() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            Flags() {


                                const b = new DataView(this.#buffer.read(4, 12), 0);
                                return b.getUint32();
                            }

                            ByteOffset() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryDirectory() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            FileName() {

                                return this.#buffer.pointer(8);
                            }

                            FileInformationClass() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();

                            }

                            FileIndex() {


                                const b = new DataView(this.#buffer.read(4, 24), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    NotifyDirectory() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            CompletionFilter() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    NotifyDirectoryEx() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            CompletionFilter() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            DirectoryNotifyInformationClass() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryFile() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            FileInformationClass() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SetFile() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            FileInformationClass() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();

                            }

                            FileObject() {

                                return this.#buffer.pointer(16);
                            }

                            ReplaceIfExists() {


                                const b = new DataView(this.#buffer.read(1, 24), 0);
                                return b.getUint8();
                            }

                            AdvanceOnly() {


                                const b = new DataView(this.#buffer.read(1, 25), 0);
                                return b.getUint8();
                            }

                            ClusterCount() {


                                const b = new DataView(this.#buffer.read(4, 24), 0);
                                return b.getUint32();
                            }

                            DeleteHandle() {

                                return this.#buffer.pointer(24);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryEa() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            EaList() {

                                return this.#buffer.pointer(8);
                            }

                            EaListLength() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            EaIndex() {


                                const b = new DataView(this.#buffer.read(4, 24), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SetEa() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 4);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryVolume() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            FsInformationClass() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SetVolume() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            FsInformationClass() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    FileSystemControl() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            OutputBufferLength() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            InputBufferLength() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            FsControlCode() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            Type3InputBuffer() {

                                return this.#buffer.pointer(24);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    LockControl() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length() {

                                return this.#buffer.pointer(0);
                            }

                            Key() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            ByteOffset() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    DeviceIoControl() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            OutputBufferLength() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            InputBufferLength() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            IoControlCode() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            Type3InputBuffer() {

                                return this.#buffer.pointer(24);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuerySecurity() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            SecurityInformation() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SetSecurity() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            SecurityInformation() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            SecurityDescriptor() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    MountVolume() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Vpb() {

                                return this.#buffer.pointer(0);
                            }

                            DeviceObject() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    VerifyVolume() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Vpb() {

                                return this.#buffer.pointer(0);
                            }

                            DeviceObject() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Scsi() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Srb() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryQuota() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            StartSid() {

                                return this.#buffer.pointer(8);
                            }

                            SidList() {

                                return this.#buffer.pointer(16);
                            }

                            SidListLength() {


                                const b = new DataView(this.#buffer.read(4, 24), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SetQuota() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 4);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryDeviceRelations() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 4);
                            }

                        ,

                            Type() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryInterface() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            InterfaceType() {

                                return this.#buffer.pointer(0);
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(2, 8), 0);
                                return b.getUint16();
                            }

                            Version() {


                                const b = new DataView(this.#buffer.read(2, 10), 0);
                                return b.getUint16();
                            }

                            Interface() {

                                return this.#buffer.pointer(16);
                            }

                            InterfaceSpecificData() {

                                return this.#buffer.pointer(24);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    DeviceCapabilities() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Capabilities() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    FilterResourceRequirements() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            IoResourceRequirementList() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    ReadWriteConfig() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            WhichSpace() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Buffer() {

                                return this.#buffer.pointer(8);
                            }

                            Offset() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 24), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SetLock() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 1);
                            }

                        ,

                            Lock() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryId() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 4);
                            }

                        ,

                            IdType() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QueryDeviceText() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            DeviceTextType() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();

                            }

                            LocaleId() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    UsageNotification() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            InPath() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Reserved(arg) {

                                // array
                                return this.#buffer.read(1, (1 + (1 * arg));

                            }

                            Type() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    WaitWake() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 4);
                            }

                        ,

                            PowerState() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    PowerSequence() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            PowerSequence() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Power() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            SystemContext() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            SystemPowerStateContext() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 4);
                                    }

                                ,

                                    Reserved1() {

                                        return this.#buffer.bits().rd(0, 8);

                                    }

                                    TargetSystemState() {

                                        return this.#buffer.bits().rd(8, 4);

                                    }

                                    EffectiveSystemState() {

                                        return this.#buffer.bits().rd(12, 4);

                                    }

                                    CurrentSystemState() {

                                        return this.#buffer.bits().rd(16, 4);

                                    }

                                    IgnoreHibernationPath() {

                                        return this.#buffer.bits().rd(20, 1);

                                    }

                                    PseudoTransition() {

                                        return this.#buffer.bits().rd(21, 1);

                                    }

                                    KernelSoftReboot() {

                                        return this.#buffer.bits().rd(22, 1);

                                    }

                                    DirectedDripsTransition() {

                                        return this.#buffer.bits().rd(23, 1);

                                    }

                                    Reserved2() {

                                        return this.#buffer.bits().rd(24, 8);

                                    }

                                    ContextAsUlong() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            Type() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();

                            }

                            State() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 4);
                                    }

                                ,

                                    SystemState() {

                                        // enum
                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();

                                    }

                                    DeviceState() {

                                        // enum
                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();

                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                            ShutdownType() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 24), 0);
                                return b.getUint32();

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    StartDevice() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            AllocatedResources() {

                                return this.#buffer.pointer(0);
                            }

                            AllocatedResourcesTranslated() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    WMI() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            ProviderId() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            DataPath() {

                                return this.#buffer.pointer(8);
                            }

                            BufferSize() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            Buffer() {

                                return this.#buffer.pointer(24);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Others() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            Argument1() {

                                return this.#buffer.pointer(0);
                            }

                            Argument2() {

                                return this.#buffer.pointer(8);
                            }

                            Argument3() {

                                return this.#buffer.pointer(16);
                            }

                            Argument4() {

                                return this.#buffer.pointer(24);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            DeviceObject() {

                return this.#buffer.pointer(40);
            }

            FileObject() {

                return this.#buffer.pointer(48);
            }

            CompletionRoutine() {

                return this.#buffer.pointer(56);
            }

            Context() {

                return this.#buffer.pointer(64);
            }

        }
        _DEVICE_OBJECT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 336);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            ReferenceCount() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            DriverObject() {

                return this.#buffer.pointer(8);
            }

            NextDevice() {

                return this.#buffer.pointer(16);
            }

            AttachedDevice() {

                return this.#buffer.pointer(24);
            }

            CurrentIrp() {

                return this.#buffer.pointer(32);
            }

            Timer() {

                return this.#buffer.pointer(40);
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();
            }

            Characteristics() {


                const b = new DataView(this.#buffer.read(4, 52), 0);
                return b.getUint32();
            }

            Vpb() {

                return this.#buffer.pointer(56);
            }

            DeviceExtension() {

                return this.#buffer.pointer(64);
            }

            DeviceType() {


                const b = new DataView(this.#buffer.read(4, 72), 0);
                return b.getUint32();
            }

            StackSize() {


                const b = new DataView(this.#buffer.read(1, 76), 0);
                return b.getUint8();
            }

            Queue() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 72);
                    }

                ,

                    ListEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Wcb() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 72);
                            }

                        ,

                            WaitQueueEntry() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 24);
                                    }

                                ,

                                    DeviceListEntry() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 16);
                                            }

                                        ,

                                            Flink() {

                                                return this.#buffer.pointer(0);
                                            }

                                            Blink() {

                                                return this.#buffer.pointer(8);
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    SortKey() {


                                        const b = new DataView(this.#buffer.read(4, 16), 0);
                                        return b.getUint32();
                                    }

                                    Inserted() {


                                        const b = new DataView(this.#buffer.read(1, 20), 0);
                                        return b.getUint8();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            DmaWaitEntry() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            NumberOfChannels() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            SyncCallback() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            DmaContext() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            ZeroMapRegisters() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved() {

                                return this.#buffer.bits().rd(3, 9);

                            }

                            NumberOfRemapPages() {

                                return this.#buffer.bits().rd(12, 20);

                            }

                            DeviceRoutine() {

                                return this.#buffer.pointer(24);
                            }

                            DeviceContext() {

                                return this.#buffer.pointer(32);
                            }

                            NumberOfMapRegisters() {


                                const b = new DataView(this.#buffer.read(4, 40), 0);
                                return b.getUint32();
                            }

                            DeviceObject() {

                                return this.#buffer.pointer(48);
                            }

                            CurrentIrp() {

                                return this.#buffer.pointer(56);
                            }

                            BufferChainingDpc() {

                                return this.#buffer.pointer(64);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 80)
            }

            AlignmentRequirement() {


                const b = new DataView(this.#buffer.read(4, 152), 0);
                return b.getUint32();
            }

            DeviceQueue() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 40);
                    }

                ,

                    Type() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    Size() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    DeviceListHead() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 8)
                    }

                    Lock() {


                        const b = new DataView(this.#buffer.read(8, 24), 0);
                        return b.getBigInt64();
                    }

                    Busy() {


                        const b = new DataView(this.#buffer.read(1, 32), 0);
                        return b.getUint8();
                    }

                    Reserved() {

                        return this.#buffer.bits().rd(0, 8);

                    }

                    Hint() {

                        return this.#buffer.bits().rd(8, 56);

                    }

                }
                return new cls(this.#buffer.address() + 160)
            }

            Dpc() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 64);
                    }

                ,

                    TargetInfoAsUlong() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Type() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    Importance() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    Number() {
                        return '这是修改!'
                    }

                    DpcListEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Next() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 8)
                    }

                    ProcessorHistory() {


                        const b = new DataView(this.#buffer.read(8, 16), 0);
                        return b.getBigInt64();
                    }

                    DeferredRoutine() {

                        return this.#buffer.pointer(24);
                    }

                    DeferredContext() {

                        return this.#buffer.pointer(32);
                    }

                    SystemArgument1() {

                        return this.#buffer.pointer(40);
                    }

                    SystemArgument2() {

                        return this.#buffer.pointer(48);
                    }

                    DpcData() {

                        return this.#buffer.pointer(56);
                    }

                }
                return new cls(this.#buffer.address() + 200)
            }

            ActiveThreadCount() {


                const b = new DataView(this.#buffer.read(4, 264), 0);
                return b.getUint32();
            }

            SecurityDescriptor() {

                return this.#buffer.pointer(272);
            }

            DeviceLock() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Header() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Lock() {
                                return '这是修改!'
                            }

                            LockNV() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Signalling() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            TimerType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            TimerControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Absolute() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Wake() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            EncodedTolerableDelay() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            Hand() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            TimerMiscFlags() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            Index() {

                                return this.#buffer.bits().rd(0, 6);

                            }

                            Inserted() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            Expired() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            Timer2Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Timer2Flags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Timer2Inserted() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Timer2Expiring() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Timer2CancelPending() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Timer2SetPending() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Timer2Running() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            Timer2Disabled() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            Timer2ReservedFlags() {

                                return this.#buffer.bits().rd(6, 2);

                            }

                            Timer2ComponentId() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Timer2RelativeId() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            QueueType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            QueueControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Abandoned() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            DisableIncrement() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            QueueReservedControlFlags() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            QueueSize() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            QueueReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ThreadType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            ThreadReserved() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            ThreadControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            CycleProfiling() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            CounterProfiling() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            GroupScheduling() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            AffinitySet() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Tagged() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            EnergyProfiling() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            SchedulerAssist() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            ThreadReservedControlFlags() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            DebugActive() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ActiveDR7() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Instrumented() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Minimal() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved4() {

                                return this.#buffer.bits().rd(3, 3);

                            }

                            UmsScheduled() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            UmsPrimary() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            MutantType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            MutantSize() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            DpcActive() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            MutantReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            SignalState() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            WaitListHead() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 280)
            }

            SectorSize() {


                const b = new DataView(this.#buffer.read(2, 304), 0);
                return b.getUint16();
            }

            Spare1() {


                const b = new DataView(this.#buffer.read(2, 306), 0);
                return b.getUint16();
            }

            DeviceObjectExtension() {

                return this.#buffer.pointer(312);
            }

            Reserved() {

                return this.#buffer.pointer(320);
            }

        }
        _KDPC: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 64);
            }

        ,

            TargetInfoAsUlong() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Importance() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Number() {
                return '这是修改!'
            }

            DpcListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    Next() {

                        return this.#buffer.pointer(0);
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            ProcessorHistory() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

            DeferredRoutine() {

                return this.#buffer.pointer(24);
            }

            DeferredContext() {

                return this.#buffer.pointer(32);
            }

            SystemArgument1() {

                return this.#buffer.pointer(40);
            }

            SystemArgument2() {

                return this.#buffer.pointer(48);
            }

            DpcData() {

                return this.#buffer.pointer(56);
            }

        }
        _EVENT_DATA_DESCRIPTOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Ptr() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Size() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            Type() {


                const b = new DataView(this.#buffer.read(1, 12), 0);
                return b.getUint8();
            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(1, 13), 0);
                return b.getUint8();
            }

            Reserved2() {


                const b = new DataView(this.#buffer.read(2, 14), 0);
                return b.getUint16();
            }

        }
        _EVENT_DESCRIPTOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Id() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Version() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Channel() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            Level() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

            Opcode() {


                const b = new DataView(this.#buffer.read(1, 5), 0);
                return b.getUint8();
            }

            Task() {


                const b = new DataView(this.#buffer.read(2, 6), 0);
                return b.getUint16();
            }

            Keyword() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        _RTL_SPLAY_LINKS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Parent() {

                return this.#buffer.pointer(0);
            }

            LeftChild() {

                return this.#buffer.pointer(8);
            }

            RightChild() {

                return this.#buffer.pointer(16);
            }

        }
        _RTL_DYNAMIC_HASH_TABLE_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            ChainHead() {

                return this.#buffer.pointer(0);
            }

            PrevLinkage() {

                return this.#buffer.pointer(8);
            }

            Signature() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

        }
        _RTL_DYNAMIC_HASH_TABLE_ENUMERATOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            HashEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Linkage() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Signature() {


                        const b = new DataView(this.#buffer.read(8, 16), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            CurEntry() {

                return this.#buffer.pointer(0);
            }

            ChainHead() {

                return this.#buffer.pointer(24);
            }

            BucketIndex() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

        }
        _RTL_DYNAMIC_HASH_TABLE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            Flags() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Shift() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            TableSize() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Pivot() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            DivisorMask() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            NumEntries() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            NonEmptyBuckets() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            NumEnumerators() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

            Directory() {

                return this.#buffer.pointer(32);
            }

        }
        _LUID: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            LowPart() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            HighPart() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        _CUSTOM_SYSTEM_EVENT_TRIGGER_CONFIG: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Size() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            TriggerId() {

                return this.#buffer.pointer(8);
            }

        }
        _KPCR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 376);
            }

        ,

            NtTib() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 56);
                    }

                ,

                    ExceptionList() {

                        return this.#buffer.pointer(0);
                    }

                    StackBase() {

                        return this.#buffer.pointer(8);
                    }

                    StackLimit() {

                        return this.#buffer.pointer(16);
                    }

                    SubSystemTib() {

                        return this.#buffer.pointer(24);
                    }

                    FiberData() {

                        return this.#buffer.pointer(32);
                    }

                    Version() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    ArbitraryUserPointer() {

                        return this.#buffer.pointer(40);
                    }

                    Self() {

                        return this.#buffer.pointer(48);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            GdtBase() {

                return this.#buffer.pointer(0);
            }

            TssBase() {

                return this.#buffer.pointer(8);
            }

            UserRsp() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

            Self() {

                return this.#buffer.pointer(24);
            }

            CurrentPrcb() {

                return this.#buffer.pointer(32);
            }

            LockArray() {

                return this.#buffer.pointer(40);
            }

            Used_Self() {

                return this.#buffer.pointer(48);
            }

            IdtBase() {

                return this.#buffer.pointer(56);
            }

            Unused(arg) {

                // array
                return this.#buffer.read(8, (64 + (8 * arg));

            }

            Irql() {


                const b = new DataView(this.#buffer.read(1, 80), 0);
                return b.getUint8();
            }

            SecondLevelCacheAssociativity() {


                const b = new DataView(this.#buffer.read(1, 81), 0);
                return b.getUint8();
            }

            ObsoleteNumber() {


                const b = new DataView(this.#buffer.read(1, 82), 0);
                return b.getUint8();
            }

            Fill0() {


                const b = new DataView(this.#buffer.read(1, 83), 0);
                return b.getUint8();
            }

            Unused0(arg) {

                // array
                return this.#buffer.read(4, (84 + (4 * arg));

            }

            MajorVersion() {


                const b = new DataView(this.#buffer.read(2, 96), 0);
                return b.getUint16();
            }

            MinorVersion() {


                const b = new DataView(this.#buffer.read(2, 98), 0);
                return b.getUint16();
            }

            StallScaleFactor() {


                const b = new DataView(this.#buffer.read(4, 100), 0);
                return b.getUint32();
            }

            Unused1(arg) {

                // array
                return this.#buffer.read(8, (104 + (8 * arg));

            }

            KernelReserved(arg) {

                // array
                return this.#buffer.read(4, (128 + (4 * arg));

            }

            SecondLevelCacheSize() {


                const b = new DataView(this.#buffer.read(4, 188), 0);
                return b.getUint32();
            }

            HalReserved(arg) {

                // array
                return this.#buffer.read(4, (192 + (4 * arg));

            }

            Unused2() {


                const b = new DataView(this.#buffer.read(4, 256), 0);
                return b.getUint32();
            }

            KdVersionBlock() {

                return this.#buffer.pointer(264);
            }

            Unused3() {

                return this.#buffer.pointer(272);
            }

            PcrAlign1(arg) {

                // array
                return this.#buffer.read(4, (280 + (4 * arg));

            }

        }
        _IO_DRIVER_CREATE_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            Size() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            ExtraCreateParameter() {

                return this.#buffer.pointer(8);
            }

            DeviceObjectHint() {

                return this.#buffer.pointer(16);
            }

            TxnParameters() {

                return this.#buffer.pointer(24);
            }

            SiloContext() {

                return this.#buffer.pointer(32);
            }

        }
        _WHEA_EVENT_LOG_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Header() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 32);
                    }

                ,

                    Signature() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Version() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Length() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                    Type() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 12), 0);
                        return b.getUint32();

                    }

                    OwnerTag() {


                        const b = new DataView(this.#buffer.read(4, 16), 0);
                        return b.getUint32();
                    }

                    Id() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 20), 0);
                        return b.getUint32();

                    }

                    Flags() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 4);
                            }

                        ,

                            Reserved() {

                                return this.#buffer.bits().rd(0, 32);

                            }

                            AsULONG() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 24)
                    }

                    PayloadLength() {


                        const b = new DataView(this.#buffer.read(4, 28), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

        }
        _WHEA_ERROR_PACKET_V2: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 80);
            }

        ,

            Signature() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Version() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Flags() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 4);
                    }

                ,

                    PreviousError() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    Reserved1() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    HypervisorError() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    Simulated() {

                        return this.#buffer.bits().rd(3, 1);

                    }

                    PlatformPfaControl() {

                        return this.#buffer.bits().rd(4, 1);

                    }

                    PlatformDirectedOffline() {

                        return this.#buffer.bits().rd(5, 1);

                    }

                    Reserved2() {

                        return this.#buffer.bits().rd(6, 26);

                    }

                    AsULONG() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 12)
            }

            ErrorType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();

            }

            ErrorSeverity() {

                // enum
                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();

            }

            ErrorSourceId() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            ErrorSourceType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();

            }

            NotifyType() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Data1() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Data2() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    Data3() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Data4(arg) {

                        // array
                        return this.#buffer.read(1, (8 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 32)
            }

            Context() {


                const b = new DataView(this.#buffer.read(8, 48), 0);
                return b.getBigInt64();
            }

            DataFormat() {

                // enum
                const b = new DataView(this.#buffer.read(4, 56), 0);
                return b.getUint32();

            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(4, 60), 0);
                return b.getUint32();
            }

            DataOffset() {


                const b = new DataView(this.#buffer.read(4, 64), 0);
                return b.getUint32();
            }

            DataLength() {


                const b = new DataView(this.#buffer.read(4, 68), 0);
                return b.getUint32();
            }

            PshedDataOffset() {


                const b = new DataView(this.#buffer.read(4, 72), 0);
                return b.getUint32();
            }

            PshedDataLength() {


                const b = new DataView(this.#buffer.read(4, 76), 0);
                return b.getUint32();
            }

        }
        _WHEA_ERROR_RECORD: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 200);
            }

        ,

            Header() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 128);
                    }

                ,

                    Signature() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Revision() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 2);
                            }

                        ,

                            MinorRevision() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            MajorRevision() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            AsUSHORT() {


                                const b = new DataView(this.#buffer.read(2, 0), 0);
                                return b.getUint16();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                    SignatureEnd() {


                        const b = new DataView(this.#buffer.read(4, 6), 0);
                        return b.getUint32();
                    }

                    SectionCount() {


                        const b = new DataView(this.#buffer.read(2, 10), 0);
                        return b.getUint16();
                    }

                    Severity() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 12), 0);
                        return b.getUint32();

                    }

                    ValidBits() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 4);
                            }

                        ,

                            PlatformId() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Timestamp() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            PartitionId() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved() {

                                return this.#buffer.bits().rd(3, 29);

                            }

                            AsULONG() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 16)
                    }

                    Length() {


                        const b = new DataView(this.#buffer.read(4, 20), 0);
                        return b.getUint32();
                    }

                    Timestamp() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Seconds() {

                                return this.#buffer.bits().rd(0, 8);

                            }

                            Minutes() {

                                return this.#buffer.bits().rd(8, 8);

                            }

                            Hours() {

                                return this.#buffer.bits().rd(16, 8);

                            }

                            Precise() {

                                return this.#buffer.bits().rd(24, 1);

                            }

                            Reserved() {

                                return this.#buffer.bits().rd(25, 7);

                            }

                            Day() {

                                return this.#buffer.bits().rd(32, 8);

                            }

                            Month() {

                                return this.#buffer.bits().rd(40, 8);

                            }

                            Year() {

                                return this.#buffer.bits().rd(48, 8);

                            }

                            Century() {

                                return this.#buffer.bits().rd(56, 8);

                            }

                            AsLARGE_INTEGER() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                        }
                        return new cls(this.#buffer.address() + 24)
                    }

                    PlatformId() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Data1() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Data2() {


                                const b = new DataView(this.#buffer.read(2, 4), 0);
                                return b.getUint16();
                            }

                            Data3() {


                                const b = new DataView(this.#buffer.read(2, 6), 0);
                                return b.getUint16();
                            }

                            Data4(arg) {

                                // array
                                return this.#buffer.read(1, (8 + (1 * arg));

                            }

                        }
                        return new cls(this.#buffer.address() + 32)
                    }

                    PartitionId() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Data1() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Data2() {


                                const b = new DataView(this.#buffer.read(2, 4), 0);
                                return b.getUint16();
                            }

                            Data3() {


                                const b = new DataView(this.#buffer.read(2, 6), 0);
                                return b.getUint16();
                            }

                            Data4(arg) {

                                // array
                                return this.#buffer.read(1, (8 + (1 * arg));

                            }

                        }
                        return new cls(this.#buffer.address() + 48)
                    }

                    CreatorId() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Data1() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Data2() {


                                const b = new DataView(this.#buffer.read(2, 4), 0);
                                return b.getUint16();
                            }

                            Data3() {


                                const b = new DataView(this.#buffer.read(2, 6), 0);
                                return b.getUint16();
                            }

                            Data4(arg) {

                                // array
                                return this.#buffer.read(1, (8 + (1 * arg));

                            }

                        }
                        return new cls(this.#buffer.address() + 64)
                    }

                    NotifyType() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Data1() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Data2() {


                                const b = new DataView(this.#buffer.read(2, 4), 0);
                                return b.getUint16();
                            }

                            Data3() {


                                const b = new DataView(this.#buffer.read(2, 6), 0);
                                return b.getUint16();
                            }

                            Data4(arg) {

                                // array
                                return this.#buffer.read(1, (8 + (1 * arg));

                            }

                        }
                        return new cls(this.#buffer.address() + 80)
                    }

                    RecordId() {


                        const b = new DataView(this.#buffer.read(8, 96), 0);
                        return b.getBigInt64();
                    }

                    Flags() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 4);
                            }

                        ,

                            Recovered() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            PreviousError() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Simulated() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved() {

                                return this.#buffer.bits().rd(3, 29);

                            }

                            AsULONG() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 104)
                    }

                    PersistenceInfo() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Signature() {

                                return this.#buffer.bits().rd(0, 16);

                            }

                            Length() {

                                return this.#buffer.bits().rd(16, 24);

                            }

                            Identifier() {

                                return this.#buffer.bits().rd(40, 16);

                            }

                            Attributes() {

                                return this.#buffer.bits().rd(56, 2);

                            }

                            DoNotLog() {

                                return this.#buffer.bits().rd(58, 1);

                            }

                            Reserved() {

                                return this.#buffer.bits().rd(59, 5);

                            }

                            AsULONGLONG() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 108)
                    }

                    Reserved(arg) {

                        // array
                        return this.#buffer.read(1, (116 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            SectionDescriptor(arg) {
                内置struct
            }

        }
        _WHEA_ERROR_RECORD_SECTION_DESCRIPTOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 72);
            }

        ,

            SectionOffset() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            SectionLength() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Revision() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 2);
                    }

                ,

                    MinorRevision() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    MajorRevision() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    AsUSHORT() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            ValidBits() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 1);
                    }

                ,

                    FRUId() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    FRUText() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(2, 6);

                    }

                    AsUCHAR() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                }
                return new cls(this.#buffer.address() + 10)
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(1, 11), 0);
                return b.getUint8();
            }

            Flags() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 4);
                    }

                ,

                    Primary() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    ContainmentWarning() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    Reset() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    ThresholdExceeded() {

                        return this.#buffer.bits().rd(3, 1);

                    }

                    ResourceNotAvailable() {

                        return this.#buffer.bits().rd(4, 1);

                    }

                    LatentError() {

                        return this.#buffer.bits().rd(5, 1);

                    }

                    Propagated() {

                        return this.#buffer.bits().rd(6, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(7, 25);

                    }

                    AsULONG() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 12)
            }

            SectionType() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Data1() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Data2() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    Data3() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Data4(arg) {

                        // array
                        return this.#buffer.read(1, (8 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            FRUId() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Data1() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Data2() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    Data3() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Data4(arg) {

                        // array
                        return this.#buffer.read(1, (8 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 32)
            }

            SectionSeverity() {

                // enum
                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();

            }

            FRUText(arg) {

                // array
                return this.#buffer.read(1, (52 + (1 * arg));

            }

        }
        _GUID: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Data1() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Data2() {


                const b = new DataView(this.#buffer.read(2, 4), 0);
                return b.getUint16();
            }

            Data3() {


                const b = new DataView(this.#buffer.read(2, 6), 0);
                return b.getUint16();
            }

            Data4(arg) {

                // array
                return this.#buffer.read(1, (8 + (1 * arg));

            }

        }
        _RTL_RB_TREE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Root() {

                return this.#buffer.pointer(0);
            }

            Encoded() {

                return this.#buffer.bits().rd(0, 1);

            }

            Min() {

                return this.#buffer.pointer(8);
            }

        }
        _RTL_BALANCED_NODE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Children(arg) {
                内置struct
            }

            Left() {

                return this.#buffer.pointer(0);
            }

            Right() {

                return this.#buffer.pointer(8);
            }

            Red() {

                return this.#buffer.bits().rd(0, 1);

            }

            Balance() {

                return this.#buffer.bits().rd(0, 2);

            }

            ParentValue() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

        }
        _RTL_AVL_TREE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Root() {

                return this.#buffer.pointer(0);
            }

        }
        _KPRCB: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 1792);
            }

        ,

            MxCsr() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            LegacyNumber() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

            ReservedMustBeZero() {


                const b = new DataView(this.#buffer.read(1, 5), 0);
                return b.getUint8();
            }

            InterruptRequest() {


                const b = new DataView(this.#buffer.read(1, 6), 0);
                return b.getUint8();
            }

            IdleHalt() {


                const b = new DataView(this.#buffer.read(1, 7), 0);
                return b.getUint8();
            }

            CurrentThread() {

                return this.#buffer.pointer(8);
            }

            NextThread() {

                return this.#buffer.pointer(16);
            }

            IdleThread() {

                return this.#buffer.pointer(24);
            }

            NestingLevel() {


                const b = new DataView(this.#buffer.read(1, 32), 0);
                return b.getUint8();
            }

            ClockOwner() {


                const b = new DataView(this.#buffer.read(1, 33), 0);
                return b.getUint8();
            }

            PendingTickFlags() {


                const b = new DataView(this.#buffer.read(1, 34), 0);
                return b.getUint8();
            }

            PendingTick() {

                return this.#buffer.bits().rd(0, 1);

            }

            PendingBackupTick() {

                return this.#buffer.bits().rd(1, 1);

            }

            IdleState() {


                const b = new DataView(this.#buffer.read(1, 35), 0);
                return b.getUint8();
            }

            Number() {


                const b = new DataView(this.#buffer.read(4, 36), 0);
                return b.getUint32();
            }

            RspBase() {


                const b = new DataView(this.#buffer.read(8, 40), 0);
                return b.getBigInt64();
            }

            PrcbLock() {


                const b = new DataView(this.#buffer.read(8, 48), 0);
                return b.getBigInt64();
            }

            PriorityState() {

                return this.#buffer.pointer(56);
            }

            CpuType() {


                const b = new DataView(this.#buffer.read(1, 64), 0);
                return b.getUint8();
            }

            CpuID() {


                const b = new DataView(this.#buffer.read(1, 65), 0);
                return b.getUint8();
            }

            CpuStep() {


                const b = new DataView(this.#buffer.read(2, 66), 0);
                return b.getUint16();
            }

            CpuStepping() {


                const b = new DataView(this.#buffer.read(1, 66), 0);
                return b.getUint8();
            }

            CpuModel() {


                const b = new DataView(this.#buffer.read(1, 67), 0);
                return b.getUint8();
            }

            MHz() {


                const b = new DataView(this.#buffer.read(4, 68), 0);
                return b.getUint32();
            }

            HalReserved(arg) {

                // array
                return this.#buffer.read(8, (72 + (8 * arg));

            }

            MinorVersion() {


                const b = new DataView(this.#buffer.read(2, 136), 0);
                return b.getUint16();
            }

            MajorVersion() {


                const b = new DataView(this.#buffer.read(2, 138), 0);
                return b.getUint16();
            }

            BuildType() {


                const b = new DataView(this.#buffer.read(1, 140), 0);
                return b.getUint8();
            }

            CpuVendor() {


                const b = new DataView(this.#buffer.read(1, 141), 0);
                return b.getUint8();
            }

            CoresPerPhysicalProcessor() {


                const b = new DataView(this.#buffer.read(1, 142), 0);
                return b.getUint8();
            }

            LogicalProcessorsPerCore() {


                const b = new DataView(this.#buffer.read(1, 143), 0);
                return b.getUint8();
            }

            PrcbPad04(arg) {

                // array
                return this.#buffer.read(8, (144 + (8 * arg));

            }

            ParentNode() {

                return this.#buffer.pointer(192);
            }

            GroupSetMember() {


                const b = new DataView(this.#buffer.read(8, 200), 0);
                return b.getBigInt64();
            }

            Group() {


                const b = new DataView(this.#buffer.read(1, 208), 0);
                return b.getUint8();
            }

            GroupIndex() {


                const b = new DataView(this.#buffer.read(1, 209), 0);
                return b.getUint8();
            }

            PrcbPad05(arg) {

                // array
                return this.#buffer.read(1, (210 + (1 * arg));

            }

            InitialApicId() {


                const b = new DataView(this.#buffer.read(4, 212), 0);
                return b.getUint32();
            }

            ScbOffset() {


                const b = new DataView(this.#buffer.read(4, 216), 0);
                return b.getUint32();
            }

            ApicMask() {


                const b = new DataView(this.#buffer.read(4, 220), 0);
                return b.getUint32();
            }

            AcpiReserved() {

                return this.#buffer.pointer(224);
            }

            CFlushSize() {


                const b = new DataView(this.#buffer.read(4, 232), 0);
                return b.getUint32();
            }

            PrcbPad11(arg) {

                // array
                return this.#buffer.read(8, (240 + (8 * arg));

            }

            ProcessorState() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 1472);
                    }

                ,

                    SpecialRegisters() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 240);
                            }

                        ,

                            Cr0() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            Cr2() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                            Cr3() {


                                const b = new DataView(this.#buffer.read(8, 16), 0);
                                return b.getBigInt64();
                            }

                            Cr4() {


                                const b = new DataView(this.#buffer.read(8, 24), 0);
                                return b.getBigInt64();
                            }

                            KernelDr0() {


                                const b = new DataView(this.#buffer.read(8, 32), 0);
                                return b.getBigInt64();
                            }

                            KernelDr1() {


                                const b = new DataView(this.#buffer.read(8, 40), 0);
                                return b.getBigInt64();
                            }

                            KernelDr2() {


                                const b = new DataView(this.#buffer.read(8, 48), 0);
                                return b.getBigInt64();
                            }

                            KernelDr3() {


                                const b = new DataView(this.#buffer.read(8, 56), 0);
                                return b.getBigInt64();
                            }

                            KernelDr6() {


                                const b = new DataView(this.#buffer.read(8, 64), 0);
                                return b.getBigInt64();
                            }

                            KernelDr7() {


                                const b = new DataView(this.#buffer.read(8, 72), 0);
                                return b.getBigInt64();
                            }

                            Gdtr() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Pad(arg) {

                                        // array
                                        return this.#buffer.read(2, (0 + (2 * arg));

                                    }

                                    Limit() {


                                        const b = new DataView(this.#buffer.read(2, 6), 0);
                                        return b.getUint16();
                                    }

                                    Base() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 80)
                            }

                            Idtr() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Pad(arg) {

                                        // array
                                        return this.#buffer.read(2, (0 + (2 * arg));

                                    }

                                    Limit() {


                                        const b = new DataView(this.#buffer.read(2, 6), 0);
                                        return b.getUint16();
                                    }

                                    Base() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 96)
                            }

                            Tr() {


                                const b = new DataView(this.#buffer.read(2, 112), 0);
                                return b.getUint16();
                            }

                            Ldtr() {


                                const b = new DataView(this.#buffer.read(2, 114), 0);
                                return b.getUint16();
                            }

                            MxCsr() {


                                const b = new DataView(this.#buffer.read(4, 116), 0);
                                return b.getUint32();
                            }

                            DebugControl() {


                                const b = new DataView(this.#buffer.read(8, 120), 0);
                                return b.getBigInt64();
                            }

                            LastBranchToRip() {


                                const b = new DataView(this.#buffer.read(8, 128), 0);
                                return b.getBigInt64();
                            }

                            LastBranchFromRip() {


                                const b = new DataView(this.#buffer.read(8, 136), 0);
                                return b.getBigInt64();
                            }

                            LastExceptionToRip() {


                                const b = new DataView(this.#buffer.read(8, 144), 0);
                                return b.getBigInt64();
                            }

                            LastExceptionFromRip() {


                                const b = new DataView(this.#buffer.read(8, 152), 0);
                                return b.getBigInt64();
                            }

                            Cr8() {


                                const b = new DataView(this.#buffer.read(8, 160), 0);
                                return b.getBigInt64();
                            }

                            MsrGsBase() {


                                const b = new DataView(this.#buffer.read(8, 168), 0);
                                return b.getBigInt64();
                            }

                            MsrGsSwap() {


                                const b = new DataView(this.#buffer.read(8, 176), 0);
                                return b.getBigInt64();
                            }

                            MsrStar() {


                                const b = new DataView(this.#buffer.read(8, 184), 0);
                                return b.getBigInt64();
                            }

                            MsrLStar() {


                                const b = new DataView(this.#buffer.read(8, 192), 0);
                                return b.getBigInt64();
                            }

                            MsrCStar() {


                                const b = new DataView(this.#buffer.read(8, 200), 0);
                                return b.getBigInt64();
                            }

                            MsrSyscallMask() {


                                const b = new DataView(this.#buffer.read(8, 208), 0);
                                return b.getBigInt64();
                            }

                            Xcr0() {


                                const b = new DataView(this.#buffer.read(8, 216), 0);
                                return b.getBigInt64();
                            }

                            MsrFsBase() {


                                const b = new DataView(this.#buffer.read(8, 224), 0);
                                return b.getBigInt64();
                            }

                            SpecialPadding0() {


                                const b = new DataView(this.#buffer.read(8, 232), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    ContextFrame() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 1232);
                            }

                        ,

                            P1Home() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            P2Home() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                            P3Home() {


                                const b = new DataView(this.#buffer.read(8, 16), 0);
                                return b.getBigInt64();
                            }

                            P4Home() {


                                const b = new DataView(this.#buffer.read(8, 24), 0);
                                return b.getBigInt64();
                            }

                            P5Home() {


                                const b = new DataView(this.#buffer.read(8, 32), 0);
                                return b.getBigInt64();
                            }

                            P6Home() {


                                const b = new DataView(this.#buffer.read(8, 40), 0);
                                return b.getBigInt64();
                            }

                            ContextFlags() {


                                const b = new DataView(this.#buffer.read(4, 48), 0);
                                return b.getUint32();
                            }

                            MxCsr() {


                                const b = new DataView(this.#buffer.read(4, 52), 0);
                                return b.getUint32();
                            }

                            SegCs() {


                                const b = new DataView(this.#buffer.read(2, 56), 0);
                                return b.getUint16();
                            }

                            SegDs() {


                                const b = new DataView(this.#buffer.read(2, 58), 0);
                                return b.getUint16();
                            }

                            SegEs() {


                                const b = new DataView(this.#buffer.read(2, 60), 0);
                                return b.getUint16();
                            }

                            SegFs() {


                                const b = new DataView(this.#buffer.read(2, 62), 0);
                                return b.getUint16();
                            }

                            SegGs() {


                                const b = new DataView(this.#buffer.read(2, 64), 0);
                                return b.getUint16();
                            }

                            SegSs() {


                                const b = new DataView(this.#buffer.read(2, 66), 0);
                                return b.getUint16();
                            }

                            EFlags() {


                                const b = new DataView(this.#buffer.read(4, 68), 0);
                                return b.getUint32();
                            }

                            Dr0() {


                                const b = new DataView(this.#buffer.read(8, 72), 0);
                                return b.getBigInt64();
                            }

                            Dr1() {


                                const b = new DataView(this.#buffer.read(8, 80), 0);
                                return b.getBigInt64();
                            }

                            Dr2() {


                                const b = new DataView(this.#buffer.read(8, 88), 0);
                                return b.getBigInt64();
                            }

                            Dr3() {


                                const b = new DataView(this.#buffer.read(8, 96), 0);
                                return b.getBigInt64();
                            }

                            Dr6() {


                                const b = new DataView(this.#buffer.read(8, 104), 0);
                                return b.getBigInt64();
                            }

                            Dr7() {


                                const b = new DataView(this.#buffer.read(8, 112), 0);
                                return b.getBigInt64();
                            }

                            Rax() {


                                const b = new DataView(this.#buffer.read(8, 120), 0);
                                return b.getBigInt64();
                            }

                            Rcx() {


                                const b = new DataView(this.#buffer.read(8, 128), 0);
                                return b.getBigInt64();
                            }

                            Rdx() {


                                const b = new DataView(this.#buffer.read(8, 136), 0);
                                return b.getBigInt64();
                            }

                            Rbx() {


                                const b = new DataView(this.#buffer.read(8, 144), 0);
                                return b.getBigInt64();
                            }

                            Rsp() {


                                const b = new DataView(this.#buffer.read(8, 152), 0);
                                return b.getBigInt64();
                            }

                            Rbp() {


                                const b = new DataView(this.#buffer.read(8, 160), 0);
                                return b.getBigInt64();
                            }

                            Rsi() {


                                const b = new DataView(this.#buffer.read(8, 168), 0);
                                return b.getBigInt64();
                            }

                            Rdi() {


                                const b = new DataView(this.#buffer.read(8, 176), 0);
                                return b.getBigInt64();
                            }

                            R8() {


                                const b = new DataView(this.#buffer.read(8, 184), 0);
                                return b.getBigInt64();
                            }

                            R9() {


                                const b = new DataView(this.#buffer.read(8, 192), 0);
                                return b.getBigInt64();
                            }

                            R10() {


                                const b = new DataView(this.#buffer.read(8, 200), 0);
                                return b.getBigInt64();
                            }

                            R11() {


                                const b = new DataView(this.#buffer.read(8, 208), 0);
                                return b.getBigInt64();
                            }

                            R12() {


                                const b = new DataView(this.#buffer.read(8, 216), 0);
                                return b.getBigInt64();
                            }

                            R13() {


                                const b = new DataView(this.#buffer.read(8, 224), 0);
                                return b.getBigInt64();
                            }

                            R14() {


                                const b = new DataView(this.#buffer.read(8, 232), 0);
                                return b.getBigInt64();
                            }

                            R15() {


                                const b = new DataView(this.#buffer.read(8, 240), 0);
                                return b.getBigInt64();
                            }

                            Rip() {


                                const b = new DataView(this.#buffer.read(8, 248), 0);
                                return b.getBigInt64();
                            }

                            FltSave() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 512);
                                    }

                                ,

                                    ControlWord() {


                                        const b = new DataView(this.#buffer.read(2, 0), 0);
                                        return b.getUint16();
                                    }

                                    StatusWord() {


                                        const b = new DataView(this.#buffer.read(2, 2), 0);
                                        return b.getUint16();
                                    }

                                    TagWord() {


                                        const b = new DataView(this.#buffer.read(1, 4), 0);
                                        return b.getUint8();
                                    }

                                    Reserved1() {


                                        const b = new DataView(this.#buffer.read(1, 5), 0);
                                        return b.getUint8();
                                    }

                                    ErrorOpcode() {


                                        const b = new DataView(this.#buffer.read(2, 6), 0);
                                        return b.getUint16();
                                    }

                                    ErrorOffset() {


                                        const b = new DataView(this.#buffer.read(4, 8), 0);
                                        return b.getUint32();
                                    }

                                    ErrorSelector() {


                                        const b = new DataView(this.#buffer.read(2, 12), 0);
                                        return b.getUint16();
                                    }

                                    Reserved2() {


                                        const b = new DataView(this.#buffer.read(2, 14), 0);
                                        return b.getUint16();
                                    }

                                    DataOffset() {


                                        const b = new DataView(this.#buffer.read(4, 16), 0);
                                        return b.getUint32();
                                    }

                                    DataSelector() {


                                        const b = new DataView(this.#buffer.read(2, 20), 0);
                                        return b.getUint16();
                                    }

                                    Reserved3() {


                                        const b = new DataView(this.#buffer.read(2, 22), 0);
                                        return b.getUint16();
                                    }

                                    MxCsr() {


                                        const b = new DataView(this.#buffer.read(4, 24), 0);
                                        return b.getUint32();
                                    }

                                    MxCsr_Mask() {


                                        const b = new DataView(this.#buffer.read(4, 28), 0);
                                        return b.getUint32();
                                    }

                                    FloatRegisters(arg) {
                                        内置struct
                                    }

                                    XmmRegisters(arg) {
                                        内置struct
                                    }

                                    Reserved4(arg) {

                                        // array
                                        return this.#buffer.read(1, (416 + (1 * arg));

                                    }

                                }
                                return new cls(this.#buffer.address() + 256)
                            }

                            Header(arg) {
                                内置struct
                            }

                            Legacy(arg) {
                                内置struct
                            }

                            Xmm0() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 416)
                            }

                            Xmm1() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 432)
                            }

                            Xmm2() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 448)
                            }

                            Xmm3() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 464)
                            }

                            Xmm4() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 480)
                            }

                            Xmm5() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 496)
                            }

                            Xmm6() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 512)
                            }

                            Xmm7() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 528)
                            }

                            Xmm8() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 544)
                            }

                            Xmm9() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 560)
                            }

                            Xmm10() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 576)
                            }

                            Xmm11() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 592)
                            }

                            Xmm12() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 608)
                            }

                            Xmm13() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 624)
                            }

                            Xmm14() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 640)
                            }

                            Xmm15() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Low() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                    High() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 656)
                            }

                            VectorRegister(arg) {
                                内置struct
                            }

                            VectorControl() {


                                const b = new DataView(this.#buffer.read(8, 1184), 0);
                                return b.getBigInt64();
                            }

                            DebugControl() {


                                const b = new DataView(this.#buffer.read(8, 1192), 0);
                                return b.getBigInt64();
                            }

                            LastBranchToRip() {


                                const b = new DataView(this.#buffer.read(8, 1200), 0);
                                return b.getBigInt64();
                            }

                            LastBranchFromRip() {


                                const b = new DataView(this.#buffer.read(8, 1208), 0);
                                return b.getBigInt64();
                            }

                            LastExceptionToRip() {


                                const b = new DataView(this.#buffer.read(8, 1216), 0);
                                return b.getBigInt64();
                            }

                            LastExceptionFromRip() {


                                const b = new DataView(this.#buffer.read(8, 1224), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 240)
                    }

                }
                return new cls(this.#buffer.address() + 256)
            }

            ExtendedSupervisorState() {

                return this.#buffer.pointer(1728);
            }

            ProcessorSignature() {


                const b = new DataView(this.#buffer.read(4, 1736), 0);
                return b.getUint32();
            }

            ProcessorFlags() {


                const b = new DataView(this.#buffer.read(4, 1740), 0);
                return b.getUint32();
            }

            PrcbPad12a() {


                const b = new DataView(this.#buffer.read(8, 1744), 0);
                return b.getBigInt64();
            }

            PrcbPad12(arg) {

                // array
                return this.#buffer.read(8, (1752 + (8 * arg));

            }

        }
        _EX_PUSH_LOCK: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Locked() {

                return this.#buffer.bits().rd(0, 1);

            }

            Waiting() {

                return this.#buffer.bits().rd(1, 1);

            }

            Waking() {

                return this.#buffer.bits().rd(2, 1);

            }

            MultipleShared() {

                return this.#buffer.bits().rd(3, 1);

            }

            Shared() {

                return this.#buffer.bits().rd(4, 60);

            }

            Value() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Ptr() {

                return this.#buffer.pointer(0);
            }

        }
        _HALP_ALLOC_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            BufferList() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Lock() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

        }
        _MCUPDATE_INFO: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 48);
            }

        ,

            List() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Status() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Id() {


                const b = new DataView(this.#buffer.read(8, 24), 0);
                return b.getBigInt64();
            }

            VendorScratch(arg) {

                // array
                return this.#buffer.read(8, (32 + (8 * arg));

            }

        }
        _HARDWARE_PTE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Valid() {

                return this.#buffer.bits().rd(0, 1);

            }

            Write() {

                return this.#buffer.bits().rd(1, 1);

            }

            Owner() {

                return this.#buffer.bits().rd(2, 1);

            }

            WriteThrough() {

                return this.#buffer.bits().rd(3, 1);

            }

            CacheDisable() {

                return this.#buffer.bits().rd(4, 1);

            }

            Accessed() {

                return this.#buffer.bits().rd(5, 1);

            }

            Dirty() {

                return this.#buffer.bits().rd(6, 1);

            }

            LargePage() {

                return this.#buffer.bits().rd(7, 1);

            }

            Global() {

                return this.#buffer.bits().rd(8, 1);

            }

            CopyOnWrite() {

                return this.#buffer.bits().rd(9, 1);

            }

            Prototype() {

                return this.#buffer.bits().rd(10, 1);

            }

            reserved0() {

                return this.#buffer.bits().rd(11, 1);

            }

            PageFrameNumber() {

                return this.#buffer.bits().rd(12, 36);

            }

            reserved1() {

                return this.#buffer.bits().rd(48, 4);

            }

            SoftwareWsIndex() {

                return this.#buffer.bits().rd(52, 11);

            }

            NoExecute() {

                return this.#buffer.bits().rd(63, 1);

            }

        }
        _DEVPROPKEY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 20);
            }

        ,

            fmtid() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Data1() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Data2() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    Data3() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Data4(arg) {

                        // array
                        return this.#buffer.read(1, (8 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            pid() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

        }
        _INTERFACE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Size() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Version() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Context() {

                return this.#buffer.pointer(8);
            }

            InterfaceReference() {

                return this.#buffer.pointer(16);
            }

            InterfaceDereference() {

                return this.#buffer.pointer(24);
            }

        }
        _DEVICE_CAPABILITIES: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 64);
            }

        ,

            Size() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Version() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            DeviceD1() {

                return this.#buffer.bits().rd(0, 1);

            }

            DeviceD2() {

                return this.#buffer.bits().rd(1, 1);

            }

            LockSupported() {

                return this.#buffer.bits().rd(2, 1);

            }

            EjectSupported() {

                return this.#buffer.bits().rd(3, 1);

            }

            Removable() {

                return this.#buffer.bits().rd(4, 1);

            }

            DockDevice() {

                return this.#buffer.bits().rd(5, 1);

            }

            UniqueID() {

                return this.#buffer.bits().rd(6, 1);

            }

            SilentInstall() {

                return this.#buffer.bits().rd(7, 1);

            }

            RawDeviceOK() {

                return this.#buffer.bits().rd(8, 1);

            }

            SurpriseRemovalOK() {

                return this.#buffer.bits().rd(9, 1);

            }

            WakeFromD0() {

                return this.#buffer.bits().rd(10, 1);

            }

            WakeFromD1() {

                return this.#buffer.bits().rd(11, 1);

            }

            WakeFromD2() {

                return this.#buffer.bits().rd(12, 1);

            }

            WakeFromD3() {

                return this.#buffer.bits().rd(13, 1);

            }

            HardwareDisabled() {

                return this.#buffer.bits().rd(14, 1);

            }

            NonDynamic() {

                return this.#buffer.bits().rd(15, 1);

            }

            WarmEjectSupported() {

                return this.#buffer.bits().rd(16, 1);

            }

            NoDisplayInUI() {

                return this.#buffer.bits().rd(17, 1);

            }

            Reserved1() {

                return this.#buffer.bits().rd(18, 1);

            }

            WakeFromInterrupt() {

                return this.#buffer.bits().rd(19, 1);

            }

            SecureDevice() {

                return this.#buffer.bits().rd(20, 1);

            }

            ChildOfVgaEnabledBridge() {

                return this.#buffer.bits().rd(21, 1);

            }

            DecodeIoOnBoot() {

                return this.#buffer.bits().rd(22, 1);

            }

            Reserved() {

                return this.#buffer.bits().rd(23, 9);

            }

            Address() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            UINumber() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            DeviceState(arg) {
                内置struct
            }

            SystemWake() {

                // enum
                const b = new DataView(this.#buffer.read(4, 44), 0);
                return b.getUint32();

            }

            DeviceWake() {

                // enum
                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();

            }

            D1Latency() {


                const b = new DataView(this.#buffer.read(4, 52), 0);
                return b.getUint32();
            }

            D2Latency() {


                const b = new DataView(this.#buffer.read(4, 56), 0);
                return b.getUint32();
            }

            D3Latency() {


                const b = new DataView(this.#buffer.read(4, 60), 0);
                return b.getUint32();
            }

        }
        _WHEA_XPF_PROCESSOR_ERROR_SECTION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 65);
            }

        ,

            ValidBits() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LocalAPICId() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    CpuId() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    ProcInfoCount() {

                        return this.#buffer.bits().rd(2, 6);

                    }

                    ContextInfoCount() {

                        return this.#buffer.bits().rd(8, 6);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(14, 50);

                    }

                    ValidBits() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            LocalAPICId() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

            CpuId(arg) {

                // array
                return this.#buffer.read(1, (16 + (1 * arg));

            }

            VariableInfo(arg) {

                // array
                return this.#buffer.read(1, (64 + (1 * arg));

            }

        }
        _RTL_DYNAMIC_HASH_TABLE_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Linkage() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Signature() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

        }
        _SECONDARY_INTERRUPT_LINE_STATE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Polarity() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

            Mode() {

                // enum
                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();

            }

            Vector() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Unmasked() {


                const b = new DataView(this.#buffer.read(1, 12), 0);
                return b.getUint8();
            }

        }
        _GENERAL_LOOKASIDE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 128);
            }

        ,

            ListHead() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Alignment() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    Region() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                    HeaderX64() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Depth() {

                                return this.#buffer.bits().rd(0, 16);

                            }

                            Sequence() {

                                return this.#buffer.bits().rd(16, 48);

                            }

                            Reserved() {

                                return this.#buffer.bits().rd(0, 4);

                            }

                            NextEntry() {

                                return this.#buffer.bits().rd(4, 60);

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            SingleListHead() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    Next() {

                        return this.#buffer.pointer(0);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Depth() {


                const b = new DataView(this.#buffer.read(2, 16), 0);
                return b.getUint16();
            }

            MaximumDepth() {


                const b = new DataView(this.#buffer.read(2, 18), 0);
                return b.getUint16();
            }

            TotalAllocates() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            AllocateMisses() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            AllocateHits() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            TotalFrees() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

            FreeMisses() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            FreeHits() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            Type() {

                // enum
                const b = new DataView(this.#buffer.read(4, 36), 0);
                return b.getUint32();

            }

            Tag() {


                const b = new DataView(this.#buffer.read(4, 40), 0);
                return b.getUint32();
            }

            Size() {


                const b = new DataView(this.#buffer.read(4, 44), 0);
                return b.getUint32();
            }

            AllocateEx() {

                return this.#buffer.pointer(48);
            }

            Allocate() {

                return this.#buffer.pointer(48);
            }

            FreeEx() {

                return this.#buffer.pointer(56);
            }

            Free() {

                return this.#buffer.pointer(56);
            }

            ListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 64)
            }

            LastTotalAllocates() {


                const b = new DataView(this.#buffer.read(4, 80), 0);
                return b.getUint32();
            }

            LastAllocateMisses() {


                const b = new DataView(this.#buffer.read(4, 84), 0);
                return b.getUint32();
            }

            LastAllocateHits() {


                const b = new DataView(this.#buffer.read(4, 84), 0);
                return b.getUint32();
            }

            Future(arg) {

                // array
                return this.#buffer.read(4, (88 + (4 * arg));

            }

        }
        _IO_APIC_DATA: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            PhysicalAddress() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Identifier() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            BaseAddress() {

                return this.#buffer.pointer(16);
            }

            Version() {


                const b = new DataView(this.#buffer.read(1, 24), 0);
                return b.getUint8();
            }

            PinCount() {


                const b = new DataView(this.#buffer.read(1, 25), 0);
                return b.getUint8();
            }

            Initialized() {


                const b = new DataView(this.#buffer.read(1, 26), 0);
                return b.getUint8();
            }

            InitializedFirstLocalUnit() {


                const b = new DataView(this.#buffer.read(1, 27), 0);
                return b.getUint8();
            }

            GsiBase() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

            CmciRegister() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            IoUnitMissing() {


                const b = new DataView(this.#buffer.read(1, 36), 0);
                return b.getUint8();
            }

        }
        _REGISTERED_INTERRUPT_CONTROLLER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 344);
            }

        ,

            ListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            InternalData() {

                return this.#buffer.pointer(16);
            }

            InternalDataSize() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            FunctionTable() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 176);
                    }

                ,

                    InitializeLocalUnit() {

                        return this.#buffer.pointer(0);
                    }

                    InitializeIoUnit() {

                        return this.#buffer.pointer(8);
                    }

                    SetPriority() {

                        return this.#buffer.pointer(16);
                    }

                    GetLocalUnitError() {

                        return this.#buffer.pointer(24);
                    }

                    ClearLocalUnitError() {

                        return this.#buffer.pointer(32);
                    }

                    GetLogicalId() {

                        return this.#buffer.pointer(40);
                    }

                    SetLogicalId() {

                        return this.#buffer.pointer(48);
                    }

                    AcceptAndGetSource() {

                        return this.#buffer.pointer(56);
                    }

                    EndOfInterrupt() {

                        return this.#buffer.pointer(64);
                    }

                    FastEndOfInterrupt() {

                        return this.#buffer.pointer(72);
                    }

                    SetLineState() {

                        return this.#buffer.pointer(80);
                    }

                    RequestInterrupt() {

                        return this.#buffer.pointer(88);
                    }

                    StartProcessor() {

                        return this.#buffer.pointer(96);
                    }

                    GenerateMessage() {

                        return this.#buffer.pointer(104);
                    }

                    ConvertId() {

                        return this.#buffer.pointer(112);
                    }

                    SaveLocalInterrupts() {

                        return this.#buffer.pointer(120);
                    }

                    ReplayLocalInterrupts() {

                        return this.#buffer.pointer(128);
                    }

                    DeinitializeLocalUnit() {

                        return this.#buffer.pointer(136);
                    }

                    DeinitializeIoUnit() {

                        return this.#buffer.pointer(144);
                    }

                    QueryAndGetSource() {

                        return this.#buffer.pointer(152);
                    }

                    DeactivateInterrupt() {

                        return this.#buffer.pointer(160);
                    }

                    DirectedEndOfInterrupt() {

                        return this.#buffer.pointer(168);
                    }

                }
                return new cls(this.#buffer.address() + 32)
            }

            KnownType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 208), 0);
                return b.getUint32();

            }

            Capabilities() {


                const b = new DataView(this.#buffer.read(4, 212), 0);
                return b.getUint32();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 216), 0);
                return b.getUint32();
            }

            MaxPriority() {


                const b = new DataView(this.#buffer.read(4, 220), 0);
                return b.getUint32();
            }

            UnitId() {


                const b = new DataView(this.#buffer.read(4, 224), 0);
                return b.getUint32();
            }

            LinesHead() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 232)
            }

            OutputLinesHead() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 248)
            }

            MinLine() {


                const b = new DataView(this.#buffer.read(4, 264), 0);
                return b.getUint32();
            }

            MaxLine() {


                const b = new DataView(this.#buffer.read(4, 268), 0);
                return b.getUint32();
            }

            MaxClusterSize() {


                const b = new DataView(this.#buffer.read(4, 272), 0);
                return b.getUint32();
            }

            MaxClusters() {


                const b = new DataView(this.#buffer.read(4, 276), 0);
                return b.getUint32();
            }

            InterruptReplayDataSize() {


                const b = new DataView(this.#buffer.read(4, 280), 0);
                return b.getUint32();
            }

            Problem() {

                // enum
                const b = new DataView(this.#buffer.read(4, 284), 0);
                return b.getUint32();

            }

            ProblemStatus() {


                const b = new DataView(this.#buffer.read(4, 288), 0);
                return b.getUint32();
            }

            ProblemSourceFile() {

                return this.#buffer.pointer(296);
            }

            ProblemSourceLine() {


                const b = new DataView(this.#buffer.read(4, 304), 0);
                return b.getUint32();
            }

            CustomProblem() {


                const b = new DataView(this.#buffer.read(4, 308), 0);
                return b.getUint32();
            }

            CustomProblemStatus() {


                const b = new DataView(this.#buffer.read(4, 312), 0);
                return b.getUint32();
            }

            ResourceId() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Length() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    MaximumLength() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Buffer() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 320)
            }

            PowerHandle() {

                return this.#buffer.pointer(336);
            }

        }
        _FILE_OBJECT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 216);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            DeviceObject() {

                return this.#buffer.pointer(8);
            }

            Vpb() {

                return this.#buffer.pointer(16);
            }

            FsContext() {

                return this.#buffer.pointer(24);
            }

            FsContext2() {

                return this.#buffer.pointer(32);
            }

            SectionObjectPointer() {

                return this.#buffer.pointer(40);
            }

            PrivateCacheMap() {

                return this.#buffer.pointer(48);
            }

            FinalStatus() {


                const b = new DataView(this.#buffer.read(4, 56), 0);
                return b.getUint32();
            }

            RelatedFileObject() {

                return this.#buffer.pointer(64);
            }

            LockOperation() {


                const b = new DataView(this.#buffer.read(1, 72), 0);
                return b.getUint8();
            }

            DeletePending() {


                const b = new DataView(this.#buffer.read(1, 73), 0);
                return b.getUint8();
            }

            ReadAccess() {


                const b = new DataView(this.#buffer.read(1, 74), 0);
                return b.getUint8();
            }

            WriteAccess() {


                const b = new DataView(this.#buffer.read(1, 75), 0);
                return b.getUint8();
            }

            DeleteAccess() {


                const b = new DataView(this.#buffer.read(1, 76), 0);
                return b.getUint8();
            }

            SharedRead() {


                const b = new DataView(this.#buffer.read(1, 77), 0);
                return b.getUint8();
            }

            SharedWrite() {


                const b = new DataView(this.#buffer.read(1, 78), 0);
                return b.getUint8();
            }

            SharedDelete() {


                const b = new DataView(this.#buffer.read(1, 79), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 80), 0);
                return b.getUint32();
            }

            FileName() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Length() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    MaximumLength() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Buffer() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 88)
            }

            CurrentByteOffset() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 104)
            }

            Waiters() {


                const b = new DataView(this.#buffer.read(4, 112), 0);
                return b.getUint32();
            }

            Busy() {


                const b = new DataView(this.#buffer.read(4, 116), 0);
                return b.getUint32();
            }

            LastLock() {

                return this.#buffer.pointer(120);
            }

            Lock() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Header() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Lock() {
                                return '这是修改!'
                            }

                            LockNV() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Signalling() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            TimerType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            TimerControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Absolute() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Wake() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            EncodedTolerableDelay() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            Hand() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            TimerMiscFlags() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            Index() {

                                return this.#buffer.bits().rd(0, 6);

                            }

                            Inserted() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            Expired() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            Timer2Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Timer2Flags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Timer2Inserted() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Timer2Expiring() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Timer2CancelPending() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Timer2SetPending() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Timer2Running() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            Timer2Disabled() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            Timer2ReservedFlags() {

                                return this.#buffer.bits().rd(6, 2);

                            }

                            Timer2ComponentId() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Timer2RelativeId() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            QueueType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            QueueControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Abandoned() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            DisableIncrement() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            QueueReservedControlFlags() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            QueueSize() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            QueueReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ThreadType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            ThreadReserved() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            ThreadControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            CycleProfiling() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            CounterProfiling() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            GroupScheduling() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            AffinitySet() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Tagged() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            EnergyProfiling() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            SchedulerAssist() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            ThreadReservedControlFlags() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            DebugActive() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ActiveDR7() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Instrumented() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Minimal() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved4() {

                                return this.#buffer.bits().rd(3, 3);

                            }

                            UmsScheduled() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            UmsPrimary() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            MutantType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            MutantSize() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            DpcActive() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            MutantReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            SignalState() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            WaitListHead() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 128)
            }

            Event() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Header() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Lock() {
                                return '这是修改!'
                            }

                            LockNV() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Signalling() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            TimerType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            TimerControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Absolute() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Wake() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            EncodedTolerableDelay() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            Hand() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            TimerMiscFlags() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            Index() {

                                return this.#buffer.bits().rd(0, 6);

                            }

                            Inserted() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            Expired() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            Timer2Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Timer2Flags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Timer2Inserted() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Timer2Expiring() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Timer2CancelPending() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Timer2SetPending() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Timer2Running() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            Timer2Disabled() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            Timer2ReservedFlags() {

                                return this.#buffer.bits().rd(6, 2);

                            }

                            Timer2ComponentId() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Timer2RelativeId() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            QueueType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            QueueControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Abandoned() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            DisableIncrement() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            QueueReservedControlFlags() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            QueueSize() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            QueueReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ThreadType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            ThreadReserved() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            ThreadControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            CycleProfiling() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            CounterProfiling() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            GroupScheduling() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            AffinitySet() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Tagged() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            EnergyProfiling() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            SchedulerAssist() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            ThreadReservedControlFlags() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            DebugActive() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ActiveDR7() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Instrumented() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Minimal() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved4() {

                                return this.#buffer.bits().rd(3, 3);

                            }

                            UmsScheduled() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            UmsPrimary() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            MutantType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            MutantSize() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            DpcActive() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            MutantReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            SignalState() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            WaitListHead() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 152)
            }

            CompletionContext() {

                return this.#buffer.pointer(176);
            }

            IrpListLock() {


                const b = new DataView(this.#buffer.read(8, 184), 0);
                return b.getBigInt64();
            }

            IrpList() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 192)
            }

            FileObjectExtension() {

                return this.#buffer.pointer(208);
            }

        }
        _PROCLOCALSAPIC: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 17);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Length() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            ACPIProcessorID() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            APICID() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            APICEID() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

            Reserved(arg) {

                // array
                return this.#buffer.read(1, (5 + (1 * arg));

            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            ACPIProcessorUIDInteger() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            ACPIProcessorUIDString(arg) {

                // array
                return this.#buffer.read(1, (16 + (1 * arg));

            }

        }
        _GENERAL_LOOKASIDE_POOL: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 96);
            }

        ,

            ListHead() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Alignment() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    Region() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                    HeaderX64() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Depth() {

                                return this.#buffer.bits().rd(0, 16);

                            }

                            Sequence() {

                                return this.#buffer.bits().rd(16, 48);

                            }

                            Reserved() {

                                return this.#buffer.bits().rd(0, 4);

                            }

                            NextEntry() {

                                return this.#buffer.bits().rd(4, 60);

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            SingleListHead() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    Next() {

                        return this.#buffer.pointer(0);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Depth() {


                const b = new DataView(this.#buffer.read(2, 16), 0);
                return b.getUint16();
            }

            MaximumDepth() {


                const b = new DataView(this.#buffer.read(2, 18), 0);
                return b.getUint16();
            }

            TotalAllocates() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            AllocateMisses() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            AllocateHits() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            TotalFrees() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

            FreeMisses() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            FreeHits() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            Type() {

                // enum
                const b = new DataView(this.#buffer.read(4, 36), 0);
                return b.getUint32();

            }

            Tag() {


                const b = new DataView(this.#buffer.read(4, 40), 0);
                return b.getUint32();
            }

            Size() {


                const b = new DataView(this.#buffer.read(4, 44), 0);
                return b.getUint32();
            }

            AllocateEx() {

                return this.#buffer.pointer(48);
            }

            Allocate() {

                return this.#buffer.pointer(48);
            }

            FreeEx() {

                return this.#buffer.pointer(56);
            }

            Free() {

                return this.#buffer.pointer(56);
            }

            ListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 64)
            }

            LastTotalAllocates() {


                const b = new DataView(this.#buffer.read(4, 80), 0);
                return b.getUint32();
            }

            LastAllocateMisses() {


                const b = new DataView(this.#buffer.read(4, 84), 0);
                return b.getUint32();
            }

            LastAllocateHits() {


                const b = new DataView(this.#buffer.read(4, 84), 0);
                return b.getUint32();
            }

            Future(arg) {

                // array
                return this.#buffer.read(4, (88 + (4 * arg));

            }

        }
        _DISPATCHER_HEADER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Lock() {
                return '这是修改!'
            }

            LockNV() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Signalling() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Size() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            TimerType() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            TimerControlFlags() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Absolute() {

                return this.#buffer.bits().rd(0, 1);

            }

            Wake() {

                return this.#buffer.bits().rd(1, 1);

            }

            EncodedTolerableDelay() {

                return this.#buffer.bits().rd(2, 6);

            }

            Hand() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            TimerMiscFlags() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            Index() {

                return this.#buffer.bits().rd(0, 6);

            }

            Inserted() {

                return this.#buffer.bits().rd(6, 1);

            }

            Expired() {

                return this.#buffer.bits().rd(7, 1);

            }

            Timer2Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Timer2Flags() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Timer2Inserted() {

                return this.#buffer.bits().rd(0, 1);

            }

            Timer2Expiring() {

                return this.#buffer.bits().rd(1, 1);

            }

            Timer2CancelPending() {

                return this.#buffer.bits().rd(2, 1);

            }

            Timer2SetPending() {

                return this.#buffer.bits().rd(3, 1);

            }

            Timer2Running() {

                return this.#buffer.bits().rd(4, 1);

            }

            Timer2Disabled() {

                return this.#buffer.bits().rd(5, 1);

            }

            Timer2ReservedFlags() {

                return this.#buffer.bits().rd(6, 2);

            }

            Timer2ComponentId() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Timer2RelativeId() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            QueueType() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            QueueControlFlags() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Abandoned() {

                return this.#buffer.bits().rd(0, 1);

            }

            DisableIncrement() {

                return this.#buffer.bits().rd(1, 1);

            }

            QueueReservedControlFlags() {

                return this.#buffer.bits().rd(2, 6);

            }

            QueueSize() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            QueueReserved() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            ThreadType() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            ThreadReserved() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            ThreadControlFlags() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            CycleProfiling() {

                return this.#buffer.bits().rd(0, 1);

            }

            CounterProfiling() {

                return this.#buffer.bits().rd(1, 1);

            }

            GroupScheduling() {

                return this.#buffer.bits().rd(2, 1);

            }

            AffinitySet() {

                return this.#buffer.bits().rd(3, 1);

            }

            Tagged() {

                return this.#buffer.bits().rd(4, 1);

            }

            EnergyProfiling() {

                return this.#buffer.bits().rd(5, 1);

            }

            SchedulerAssist() {

                return this.#buffer.bits().rd(6, 1);

            }

            ThreadReservedControlFlags() {

                return this.#buffer.bits().rd(7, 1);

            }

            DebugActive() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            ActiveDR7() {

                return this.#buffer.bits().rd(0, 1);

            }

            Instrumented() {

                return this.#buffer.bits().rd(1, 1);

            }

            Minimal() {

                return this.#buffer.bits().rd(2, 1);

            }

            Reserved4() {

                return this.#buffer.bits().rd(3, 3);

            }

            UmsScheduled() {

                return this.#buffer.bits().rd(6, 1);

            }

            UmsPrimary() {

                return this.#buffer.bits().rd(7, 1);

            }

            MutantType() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            MutantSize() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            DpcActive() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            MutantReserved() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            SignalState() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            WaitListHead() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

        }
        _NAMED_PIPE_CREATE_PARAMETERS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            NamedPipeType() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            ReadMode() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            CompletionMode() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            MaximumInstances() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            InboundQuota() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            OutboundQuota() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            DefaultTimeout() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            TimeoutSpecified() {


                const b = new DataView(this.#buffer.read(1, 32), 0);
                return b.getUint8();
            }

        }
        _WAIT_CONTEXT_BLOCK: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 72);
            }

        ,

            WaitQueueEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    DeviceListEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    SortKey() {


                        const b = new DataView(this.#buffer.read(4, 16), 0);
                        return b.getUint32();
                    }

                    Inserted() {


                        const b = new DataView(this.#buffer.read(1, 20), 0);
                        return b.getUint8();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            DmaWaitEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            NumberOfChannels() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            SyncCallback() {

                return this.#buffer.bits().rd(0, 1);

            }

            DmaContext() {

                return this.#buffer.bits().rd(1, 1);

            }

            ZeroMapRegisters() {

                return this.#buffer.bits().rd(2, 1);

            }

            Reserved() {

                return this.#buffer.bits().rd(3, 9);

            }

            NumberOfRemapPages() {

                return this.#buffer.bits().rd(12, 20);

            }

            DeviceRoutine() {

                return this.#buffer.pointer(24);
            }

            DeviceContext() {

                return this.#buffer.pointer(32);
            }

            NumberOfMapRegisters() {


                const b = new DataView(this.#buffer.read(4, 40), 0);
                return b.getUint32();
            }

            DeviceObject() {

                return this.#buffer.pointer(48);
            }

            CurrentIrp() {

                return this.#buffer.pointer(56);
            }

            BufferChainingDpc() {

                return this.#buffer.pointer(64);
            }

        }
        _KSPIN_LOCK_QUEUE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Next() {

                return this.#buffer.pointer(0);
            }

            Lock() {

                return this.#buffer.pointer(8);
            }

        }
        _GEN_ADDR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            AddressSpaceID() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            BitWidth() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            BitOffset() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            AccessSize() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            Address() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 4)
            }

        }
        _IO_COMPLETION_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Port() {

                return this.#buffer.pointer(0);
            }

            Key() {

                return this.#buffer.pointer(8);
            }

        }
        _DEVOBJ_EXTENSION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 104);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            DeviceObject() {

                return this.#buffer.pointer(8);
            }

            PowerFlags() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Dope() {

                return this.#buffer.pointer(24);
            }

            ExtensionFlags() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            DeviceNode() {

                return this.#buffer.pointer(40);
            }

            AttachedTo() {

                return this.#buffer.pointer(48);
            }

            StartIoCount() {


                const b = new DataView(this.#buffer.read(4, 56), 0);
                return b.getUint32();
            }

            StartIoKey() {


                const b = new DataView(this.#buffer.read(4, 60), 0);
                return b.getUint32();
            }

            StartIoFlags() {


                const b = new DataView(this.#buffer.read(4, 64), 0);
                return b.getUint32();
            }

            Vpb() {

                return this.#buffer.pointer(72);
            }

            DependencyNode() {

                return this.#buffer.pointer(80);
            }

            InterruptContext() {

                return this.#buffer.pointer(88);
            }

            VerifierContext() {

                return this.#buffer.pointer(96);
            }

        }
        _KDEVICE_QUEUE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            DeviceListHead() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            Lock() {


                const b = new DataView(this.#buffer.read(8, 24), 0);
                return b.getBigInt64();
            }

            Busy() {


                const b = new DataView(this.#buffer.read(1, 32), 0);
                return b.getUint8();
            }

            Reserved() {

                return this.#buffer.bits().rd(0, 8);

            }

            Hint() {

                return this.#buffer.bits().rd(8, 56);

            }

        }
        __unnamed_1371: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            BaseMiddle() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Flags1() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Flags2() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            BaseHigh() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

        }
        __unnamed_1379: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            BaseMiddle() {

                return this.#buffer.bits().rd(0, 8);

            }

            Type() {

                return this.#buffer.bits().rd(8, 5);

            }

            Dpl() {

                return this.#buffer.bits().rd(13, 2);

            }

            Present() {

                return this.#buffer.bits().rd(15, 1);

            }

            LimitHigh() {

                return this.#buffer.bits().rd(16, 4);

            }

            System() {

                return this.#buffer.bits().rd(20, 1);

            }

            LongMode() {

                return this.#buffer.bits().rd(21, 1);

            }

            DefaultBig() {

                return this.#buffer.bits().rd(22, 1);

            }

            Granularity() {

                return this.#buffer.bits().rd(23, 1);

            }

            BaseHigh() {

                return this.#buffer.bits().rd(24, 8);

            }

        }
        _KAPC: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 88);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            SpareByte0() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Size() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            SpareByte1() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            SpareLong0() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Thread() {

                return this.#buffer.pointer(8);
            }

            ApcListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            Reserved(arg) {

                // array
                return this.#buffer.read(8, (32 + (8 * arg));

            }

            NormalContext() {

                return this.#buffer.pointer(56);
            }

            SystemArgument1() {

                return this.#buffer.pointer(64);
            }

            SystemArgument2() {

                return this.#buffer.pointer(72);
            }

            ApcStateIndex() {


                const b = new DataView(this.#buffer.read(1, 80), 0);
                return b.getUint8();
            }

            ApcMode() {


                const b = new DataView(this.#buffer.read(1, 81), 0);
                return b.getUint8();
            }

            Inserted() {


                const b = new DataView(this.#buffer.read(1, 82), 0);
                return b.getUint8();
            }

        }
        _WHEA_XPF_MCA_SECTION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 264);
            }

        ,

            VersionNumber() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            CpuVendor() {

                // enum
                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();

            }

            Timestamp() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            ProcessorNumber() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            GlobalStatus() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    RestartIpValid() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    ErrorIpValid() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    MachineCheckInProgress() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    LocalMceValid() {

                        return this.#buffer.bits().rd(3, 1);

                    }

                    Reserved1() {

                        return this.#buffer.bits().rd(4, 28);

                    }

                    Reserved2() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 20)
            }

            InstructionPointer() {


                const b = new DataView(this.#buffer.read(8, 28), 0);
                return b.getBigInt64();
            }

            BankNumber() {


                const b = new DataView(this.#buffer.read(4, 36), 0);
                return b.getUint32();
            }

            Status() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    McaErrorCode() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    ModelErrorCode() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    OtherInformation() {

                        return this.#buffer.bits().rd(0, 23);

                    }

                    ActionRequired() {

                        return this.#buffer.bits().rd(23, 1);

                    }

                    Signalling() {

                        return this.#buffer.bits().rd(24, 1);

                    }

                    ContextCorrupt() {

                        return this.#buffer.bits().rd(25, 1);

                    }

                    AddressValid() {

                        return this.#buffer.bits().rd(26, 1);

                    }

                    MiscValid() {

                        return this.#buffer.bits().rd(27, 1);

                    }

                    ErrorEnabled() {

                        return this.#buffer.bits().rd(28, 1);

                    }

                    UncorrectedError() {

                        return this.#buffer.bits().rd(29, 1);

                    }

                    StatusOverFlow() {

                        return this.#buffer.bits().rd(30, 1);

                    }

                    Valid() {

                        return this.#buffer.bits().rd(31, 1);

                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 40)
            }

            Address() {


                const b = new DataView(this.#buffer.read(8, 48), 0);
                return b.getBigInt64();
            }

            Misc() {


                const b = new DataView(this.#buffer.read(8, 56), 0);
                return b.getBigInt64();
            }

            ExtendedRegisterCount() {


                const b = new DataView(this.#buffer.read(4, 64), 0);
                return b.getUint32();
            }

            ApicId() {


                const b = new DataView(this.#buffer.read(4, 68), 0);
                return b.getUint32();
            }

            ExtendedRegisters(arg) {

                // array
                return this.#buffer.read(8, (72 + (8 * arg));

            }

        }
        _SYSTEM_POWER_STATE_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            Reserved1() {

                return this.#buffer.bits().rd(0, 8);

            }

            TargetSystemState() {

                return this.#buffer.bits().rd(8, 4);

            }

            EffectiveSystemState() {

                return this.#buffer.bits().rd(12, 4);

            }

            CurrentSystemState() {

                return this.#buffer.bits().rd(16, 4);

            }

            IgnoreHibernationPath() {

                return this.#buffer.bits().rd(20, 1);

            }

            PseudoTransition() {

                return this.#buffer.bits().rd(21, 1);

            }

            KernelSoftReboot() {

                return this.#buffer.bits().rd(22, 1);

            }

            DirectedDripsTransition() {

                return this.#buffer.bits().rd(23, 1);

            }

            Reserved2() {

                return this.#buffer.bits().rd(24, 8);

            }

            ContextAsUlong() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

        }
        _IOSAPIC: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Length() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            IOSAPICID() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            SystemVectorBase() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            IOSAPICAddress() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        _XSAVE_AREA_HEADER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 64);
            }

        ,

            Mask() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            CompactionMask() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

            Reserved2(arg) {

                // array
                return this.#buffer.read(8, (16 + (8 * arg));

            }

        }
        _KPROCESSOR_STATE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 1472);
            }

        ,

            SpecialRegisters() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 240);
                    }

                ,

                    Cr0() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    Cr2() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                    Cr3() {


                        const b = new DataView(this.#buffer.read(8, 16), 0);
                        return b.getBigInt64();
                    }

                    Cr4() {


                        const b = new DataView(this.#buffer.read(8, 24), 0);
                        return b.getBigInt64();
                    }

                    KernelDr0() {


                        const b = new DataView(this.#buffer.read(8, 32), 0);
                        return b.getBigInt64();
                    }

                    KernelDr1() {


                        const b = new DataView(this.#buffer.read(8, 40), 0);
                        return b.getBigInt64();
                    }

                    KernelDr2() {


                        const b = new DataView(this.#buffer.read(8, 48), 0);
                        return b.getBigInt64();
                    }

                    KernelDr3() {


                        const b = new DataView(this.#buffer.read(8, 56), 0);
                        return b.getBigInt64();
                    }

                    KernelDr6() {


                        const b = new DataView(this.#buffer.read(8, 64), 0);
                        return b.getBigInt64();
                    }

                    KernelDr7() {


                        const b = new DataView(this.#buffer.read(8, 72), 0);
                        return b.getBigInt64();
                    }

                    Gdtr() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Pad(arg) {

                                // array
                                return this.#buffer.read(2, (0 + (2 * arg));

                            }

                            Limit() {


                                const b = new DataView(this.#buffer.read(2, 6), 0);
                                return b.getUint16();
                            }

                            Base() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 80)
                    }

                    Idtr() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Pad(arg) {

                                // array
                                return this.#buffer.read(2, (0 + (2 * arg));

                            }

                            Limit() {


                                const b = new DataView(this.#buffer.read(2, 6), 0);
                                return b.getUint16();
                            }

                            Base() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 96)
                    }

                    Tr() {


                        const b = new DataView(this.#buffer.read(2, 112), 0);
                        return b.getUint16();
                    }

                    Ldtr() {


                        const b = new DataView(this.#buffer.read(2, 114), 0);
                        return b.getUint16();
                    }

                    MxCsr() {


                        const b = new DataView(this.#buffer.read(4, 116), 0);
                        return b.getUint32();
                    }

                    DebugControl() {


                        const b = new DataView(this.#buffer.read(8, 120), 0);
                        return b.getBigInt64();
                    }

                    LastBranchToRip() {


                        const b = new DataView(this.#buffer.read(8, 128), 0);
                        return b.getBigInt64();
                    }

                    LastBranchFromRip() {


                        const b = new DataView(this.#buffer.read(8, 136), 0);
                        return b.getBigInt64();
                    }

                    LastExceptionToRip() {


                        const b = new DataView(this.#buffer.read(8, 144), 0);
                        return b.getBigInt64();
                    }

                    LastExceptionFromRip() {


                        const b = new DataView(this.#buffer.read(8, 152), 0);
                        return b.getBigInt64();
                    }

                    Cr8() {


                        const b = new DataView(this.#buffer.read(8, 160), 0);
                        return b.getBigInt64();
                    }

                    MsrGsBase() {


                        const b = new DataView(this.#buffer.read(8, 168), 0);
                        return b.getBigInt64();
                    }

                    MsrGsSwap() {


                        const b = new DataView(this.#buffer.read(8, 176), 0);
                        return b.getBigInt64();
                    }

                    MsrStar() {


                        const b = new DataView(this.#buffer.read(8, 184), 0);
                        return b.getBigInt64();
                    }

                    MsrLStar() {


                        const b = new DataView(this.#buffer.read(8, 192), 0);
                        return b.getBigInt64();
                    }

                    MsrCStar() {


                        const b = new DataView(this.#buffer.read(8, 200), 0);
                        return b.getBigInt64();
                    }

                    MsrSyscallMask() {


                        const b = new DataView(this.#buffer.read(8, 208), 0);
                        return b.getBigInt64();
                    }

                    Xcr0() {


                        const b = new DataView(this.#buffer.read(8, 216), 0);
                        return b.getBigInt64();
                    }

                    MsrFsBase() {


                        const b = new DataView(this.#buffer.read(8, 224), 0);
                        return b.getBigInt64();
                    }

                    SpecialPadding0() {


                        const b = new DataView(this.#buffer.read(8, 232), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            ContextFrame() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 1232);
                    }

                ,

                    P1Home() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    P2Home() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                    P3Home() {


                        const b = new DataView(this.#buffer.read(8, 16), 0);
                        return b.getBigInt64();
                    }

                    P4Home() {


                        const b = new DataView(this.#buffer.read(8, 24), 0);
                        return b.getBigInt64();
                    }

                    P5Home() {


                        const b = new DataView(this.#buffer.read(8, 32), 0);
                        return b.getBigInt64();
                    }

                    P6Home() {


                        const b = new DataView(this.#buffer.read(8, 40), 0);
                        return b.getBigInt64();
                    }

                    ContextFlags() {


                        const b = new DataView(this.#buffer.read(4, 48), 0);
                        return b.getUint32();
                    }

                    MxCsr() {


                        const b = new DataView(this.#buffer.read(4, 52), 0);
                        return b.getUint32();
                    }

                    SegCs() {


                        const b = new DataView(this.#buffer.read(2, 56), 0);
                        return b.getUint16();
                    }

                    SegDs() {


                        const b = new DataView(this.#buffer.read(2, 58), 0);
                        return b.getUint16();
                    }

                    SegEs() {


                        const b = new DataView(this.#buffer.read(2, 60), 0);
                        return b.getUint16();
                    }

                    SegFs() {


                        const b = new DataView(this.#buffer.read(2, 62), 0);
                        return b.getUint16();
                    }

                    SegGs() {


                        const b = new DataView(this.#buffer.read(2, 64), 0);
                        return b.getUint16();
                    }

                    SegSs() {


                        const b = new DataView(this.#buffer.read(2, 66), 0);
                        return b.getUint16();
                    }

                    EFlags() {


                        const b = new DataView(this.#buffer.read(4, 68), 0);
                        return b.getUint32();
                    }

                    Dr0() {


                        const b = new DataView(this.#buffer.read(8, 72), 0);
                        return b.getBigInt64();
                    }

                    Dr1() {


                        const b = new DataView(this.#buffer.read(8, 80), 0);
                        return b.getBigInt64();
                    }

                    Dr2() {


                        const b = new DataView(this.#buffer.read(8, 88), 0);
                        return b.getBigInt64();
                    }

                    Dr3() {


                        const b = new DataView(this.#buffer.read(8, 96), 0);
                        return b.getBigInt64();
                    }

                    Dr6() {


                        const b = new DataView(this.#buffer.read(8, 104), 0);
                        return b.getBigInt64();
                    }

                    Dr7() {


                        const b = new DataView(this.#buffer.read(8, 112), 0);
                        return b.getBigInt64();
                    }

                    Rax() {


                        const b = new DataView(this.#buffer.read(8, 120), 0);
                        return b.getBigInt64();
                    }

                    Rcx() {


                        const b = new DataView(this.#buffer.read(8, 128), 0);
                        return b.getBigInt64();
                    }

                    Rdx() {


                        const b = new DataView(this.#buffer.read(8, 136), 0);
                        return b.getBigInt64();
                    }

                    Rbx() {


                        const b = new DataView(this.#buffer.read(8, 144), 0);
                        return b.getBigInt64();
                    }

                    Rsp() {


                        const b = new DataView(this.#buffer.read(8, 152), 0);
                        return b.getBigInt64();
                    }

                    Rbp() {


                        const b = new DataView(this.#buffer.read(8, 160), 0);
                        return b.getBigInt64();
                    }

                    Rsi() {


                        const b = new DataView(this.#buffer.read(8, 168), 0);
                        return b.getBigInt64();
                    }

                    Rdi() {


                        const b = new DataView(this.#buffer.read(8, 176), 0);
                        return b.getBigInt64();
                    }

                    R8() {


                        const b = new DataView(this.#buffer.read(8, 184), 0);
                        return b.getBigInt64();
                    }

                    R9() {


                        const b = new DataView(this.#buffer.read(8, 192), 0);
                        return b.getBigInt64();
                    }

                    R10() {


                        const b = new DataView(this.#buffer.read(8, 200), 0);
                        return b.getBigInt64();
                    }

                    R11() {


                        const b = new DataView(this.#buffer.read(8, 208), 0);
                        return b.getBigInt64();
                    }

                    R12() {


                        const b = new DataView(this.#buffer.read(8, 216), 0);
                        return b.getBigInt64();
                    }

                    R13() {


                        const b = new DataView(this.#buffer.read(8, 224), 0);
                        return b.getBigInt64();
                    }

                    R14() {


                        const b = new DataView(this.#buffer.read(8, 232), 0);
                        return b.getBigInt64();
                    }

                    R15() {


                        const b = new DataView(this.#buffer.read(8, 240), 0);
                        return b.getBigInt64();
                    }

                    Rip() {


                        const b = new DataView(this.#buffer.read(8, 248), 0);
                        return b.getBigInt64();
                    }

                    FltSave() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 512);
                            }

                        ,

                            ControlWord() {


                                const b = new DataView(this.#buffer.read(2, 0), 0);
                                return b.getUint16();
                            }

                            StatusWord() {


                                const b = new DataView(this.#buffer.read(2, 2), 0);
                                return b.getUint16();
                            }

                            TagWord() {


                                const b = new DataView(this.#buffer.read(1, 4), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 5), 0);
                                return b.getUint8();
                            }

                            ErrorOpcode() {


                                const b = new DataView(this.#buffer.read(2, 6), 0);
                                return b.getUint16();
                            }

                            ErrorOffset() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            ErrorSelector() {


                                const b = new DataView(this.#buffer.read(2, 12), 0);
                                return b.getUint16();
                            }

                            Reserved2() {


                                const b = new DataView(this.#buffer.read(2, 14), 0);
                                return b.getUint16();
                            }

                            DataOffset() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            DataSelector() {


                                const b = new DataView(this.#buffer.read(2, 20), 0);
                                return b.getUint16();
                            }

                            Reserved3() {


                                const b = new DataView(this.#buffer.read(2, 22), 0);
                                return b.getUint16();
                            }

                            MxCsr() {


                                const b = new DataView(this.#buffer.read(4, 24), 0);
                                return b.getUint32();
                            }

                            MxCsr_Mask() {


                                const b = new DataView(this.#buffer.read(4, 28), 0);
                                return b.getUint32();
                            }

                            FloatRegisters(arg) {
                                内置struct
                            }

                            XmmRegisters(arg) {
                                内置struct
                            }

                            Reserved4(arg) {

                                // array
                                return this.#buffer.read(1, (416 + (1 * arg));

                            }

                        }
                        return new cls(this.#buffer.address() + 256)
                    }

                    Header(arg) {
                        内置struct
                    }

                    Legacy(arg) {
                        内置struct
                    }

                    Xmm0() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 416)
                    }

                    Xmm1() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 432)
                    }

                    Xmm2() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 448)
                    }

                    Xmm3() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 464)
                    }

                    Xmm4() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 480)
                    }

                    Xmm5() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 496)
                    }

                    Xmm6() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 512)
                    }

                    Xmm7() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 528)
                    }

                    Xmm8() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 544)
                    }

                    Xmm9() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 560)
                    }

                    Xmm10() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 576)
                    }

                    Xmm11() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 592)
                    }

                    Xmm12() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 608)
                    }

                    Xmm13() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 624)
                    }

                    Xmm14() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 640)
                    }

                    Xmm15() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                            High() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 656)
                    }

                    VectorRegister(arg) {
                        内置struct
                    }

                    VectorControl() {


                        const b = new DataView(this.#buffer.read(8, 1184), 0);
                        return b.getBigInt64();
                    }

                    DebugControl() {


                        const b = new DataView(this.#buffer.read(8, 1192), 0);
                        return b.getBigInt64();
                    }

                    LastBranchToRip() {


                        const b = new DataView(this.#buffer.read(8, 1200), 0);
                        return b.getBigInt64();
                    }

                    LastBranchFromRip() {


                        const b = new DataView(this.#buffer.read(8, 1208), 0);
                        return b.getBigInt64();
                    }

                    LastExceptionToRip() {


                        const b = new DataView(this.#buffer.read(8, 1216), 0);
                        return b.getBigInt64();
                    }

                    LastExceptionFromRip() {


                        const b = new DataView(this.#buffer.read(8, 1224), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 240)
            }

        }
        _KDEVICE_QUEUE_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            DeviceListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            SortKey() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Inserted() {


                const b = new DataView(this.#buffer.read(1, 20), 0);
                return b.getUint8();
            }

        }
        _SECTION_OBJECT_POINTERS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            DataSectionObject() {

                return this.#buffer.pointer(0);
            }

            SharedCacheMap() {

                return this.#buffer.pointer(8);
            }

            ImageSectionObject() {

                return this.#buffer.pointer(16);
            }

        }
        _ACPI_CACHED_TABLE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 64);
            }

        ,

            Links() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            PhysicalAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            Header() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 36);
                    }

                ,

                    Signature() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Length() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Revision() {


                        const b = new DataView(this.#buffer.read(1, 8), 0);
                        return b.getUint8();
                    }

                    Checksum() {


                        const b = new DataView(this.#buffer.read(1, 9), 0);
                        return b.getUint8();
                    }

                    OEMID(arg) {

                        // array
                        return this.#buffer.read(1, (10 + (1 * arg));

                    }

                    OEMTableID(arg) {

                        // array
                        return this.#buffer.read(1, (16 + (1 * arg));

                    }

                    OEMRevision() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    CreatorID(arg) {

                        // array
                        return this.#buffer.read(1, (28 + (1 * arg));

                    }

                    CreatorRev() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

        }
        _IO_APIC_REGISTERS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 68);
            }

        ,

            RegisterIndex() {
                return '这是修改!'
            }

            Reserved1(arg) {
                内置struct
            }

            RegisterValue() {
                return '这是修改!'
            }

            Reserved2(arg) {
                内置struct
            }

            EndOfInterrupt() {
                return '这是修改!'
            }

        }
        _IO_RESOURCE_REQUIREMENTS_LIST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 72);
            }

        ,

            ListSize() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            InterfaceType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();

            }

            BusNumber() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            SlotNumber() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            Reserved(arg) {

                // array
                return this.#buffer.read(4, (16 + (4 * arg));

            }

            AlternativeLists() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

            List(arg) {
                内置struct
            }

        }
        _IO_SECURITY_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            SecurityQos() {

                return this.#buffer.pointer(0);
            }

            AccessState() {

                return this.#buffer.pointer(8);
            }

            DesiredAccess() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            FullCreateOptions() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

        }
        _KTSS64: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 104);
            }

        ,

            Reserved0() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Rsp0() {


                const b = new DataView(this.#buffer.read(8, 4), 0);
                return b.getBigInt64();
            }

            Rsp1() {


                const b = new DataView(this.#buffer.read(8, 12), 0);
                return b.getBigInt64();
            }

            Rsp2() {


                const b = new DataView(this.#buffer.read(8, 20), 0);
                return b.getBigInt64();
            }

            Ist(arg) {

                // array
                return this.#buffer.read(8, (28 + (8 * arg));

            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(8, 92), 0);
                return b.getBigInt64();
            }

            Reserved2() {


                const b = new DataView(this.#buffer.read(2, 100), 0);
                return b.getUint16();
            }

            IoMapBase() {


                const b = new DataView(this.#buffer.read(2, 102), 0);
                return b.getUint16();
            }

        }
        _VPB: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 96);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(2, 4), 0);
                return b.getUint16();
            }

            VolumeLabelLength() {


                const b = new DataView(this.#buffer.read(2, 6), 0);
                return b.getUint16();
            }

            DeviceObject() {

                return this.#buffer.pointer(8);
            }

            RealDevice() {

                return this.#buffer.pointer(16);
            }

            SerialNumber() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            ReferenceCount() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

            VolumeLabel(arg) {

                // array
                return this.#buffer.read(2, (32 + (2 * arg));

            }

        }
        _MAILSLOT_CREATE_PARAMETERS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            MailslotQuota() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            MaximumMessageSize() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            ReadTimeout() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            TimeoutSpecified() {


                const b = new DataView(this.#buffer.read(1, 16), 0);
                return b.getUint8();
            }

        }
        _NT_TIB: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 56);
            }

        ,

            ExceptionList() {

                return this.#buffer.pointer(0);
            }

            StackBase() {

                return this.#buffer.pointer(8);
            }

            StackLimit() {

                return this.#buffer.pointer(16);
            }

            SubSystemTib() {

                return this.#buffer.pointer(24);
            }

            FiberData() {

                return this.#buffer.pointer(32);
            }

            Version() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            ArbitraryUserPointer() {

                return this.#buffer.pointer(40);
            }

            Self() {

                return this.#buffer.pointer(48);
            }

        }
        _POWER_SEQUENCE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            SequenceD1() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            SequenceD2() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            SequenceD3() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _WHEA_ERROR_RECORD_HEADER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 128);
            }

        ,

            Signature() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Revision() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 2);
                    }

                ,

                    MinorRevision() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    MajorRevision() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    AsUSHORT() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                }
                return new cls(this.#buffer.address() + 4)
            }

            SignatureEnd() {


                const b = new DataView(this.#buffer.read(4, 6), 0);
                return b.getUint32();
            }

            SectionCount() {


                const b = new DataView(this.#buffer.read(2, 10), 0);
                return b.getUint16();
            }

            Severity() {

                // enum
                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();

            }

            ValidBits() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 4);
                    }

                ,

                    PlatformId() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    Timestamp() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    PartitionId() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(3, 29);

                    }

                    AsULONG() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            Timestamp() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    Seconds() {

                        return this.#buffer.bits().rd(0, 8);

                    }

                    Minutes() {

                        return this.#buffer.bits().rd(8, 8);

                    }

                    Hours() {

                        return this.#buffer.bits().rd(16, 8);

                    }

                    Precise() {

                        return this.#buffer.bits().rd(24, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(25, 7);

                    }

                    Day() {

                        return this.#buffer.bits().rd(32, 8);

                    }

                    Month() {

                        return this.#buffer.bits().rd(40, 8);

                    }

                    Year() {

                        return this.#buffer.bits().rd(48, 8);

                    }

                    Century() {

                        return this.#buffer.bits().rd(56, 8);

                    }

                    AsLARGE_INTEGER() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            PlatformId() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Data1() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Data2() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    Data3() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Data4(arg) {

                        // array
                        return this.#buffer.read(1, (8 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 32)
            }

            PartitionId() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Data1() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Data2() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    Data3() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Data4(arg) {

                        // array
                        return this.#buffer.read(1, (8 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 48)
            }

            CreatorId() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Data1() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Data2() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    Data3() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Data4(arg) {

                        // array
                        return this.#buffer.read(1, (8 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 64)
            }

            NotifyType() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Data1() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Data2() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    Data3() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Data4(arg) {

                        // array
                        return this.#buffer.read(1, (8 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 80)
            }

            RecordId() {


                const b = new DataView(this.#buffer.read(8, 96), 0);
                return b.getBigInt64();
            }

            Flags() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 4);
                    }

                ,

                    Recovered() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    PreviousError() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    Simulated() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(3, 29);

                    }

                    AsULONG() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 104)
            }

            PersistenceInfo() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    Signature() {

                        return this.#buffer.bits().rd(0, 16);

                    }

                    Length() {

                        return this.#buffer.bits().rd(16, 24);

                    }

                    Identifier() {

                        return this.#buffer.bits().rd(40, 16);

                    }

                    Attributes() {

                        return this.#buffer.bits().rd(56, 2);

                    }

                    DoNotLog() {

                        return this.#buffer.bits().rd(58, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(59, 5);

                    }

                    AsULONGLONG() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 108)
            }

            Reserved(arg) {

                // array
                return this.#buffer.read(1, (116 + (1 * arg));

            }

        }
        _EXCEPTION_REGISTRATION_RECORD: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Next() {

                return this.#buffer.pointer(0);
            }

            Handler() {

                return this.#buffer.pointer(8);
            }

        }
        _FADT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 268);
            }

        ,

            Header() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 36);
                    }

                ,

                    Signature() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Length() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Revision() {


                        const b = new DataView(this.#buffer.read(1, 8), 0);
                        return b.getUint8();
                    }

                    Checksum() {


                        const b = new DataView(this.#buffer.read(1, 9), 0);
                        return b.getUint8();
                    }

                    OEMID(arg) {

                        // array
                        return this.#buffer.read(1, (10 + (1 * arg));

                    }

                    OEMTableID(arg) {

                        // array
                        return this.#buffer.read(1, (16 + (1 * arg));

                    }

                    OEMRevision() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    CreatorID(arg) {

                        // array
                        return this.#buffer.read(1, (28 + (1 * arg));

                    }

                    CreatorRev() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            facs() {


                const b = new DataView(this.#buffer.read(4, 36), 0);
                return b.getUint32();
            }

            dsdt() {


                const b = new DataView(this.#buffer.read(4, 40), 0);
                return b.getUint32();
            }

            int_model() {


                const b = new DataView(this.#buffer.read(1, 44), 0);
                return b.getUint8();
            }

            pm_profile() {


                const b = new DataView(this.#buffer.read(1, 45), 0);
                return b.getUint8();
            }

            sci_int_vector() {


                const b = new DataView(this.#buffer.read(2, 46), 0);
                return b.getUint16();
            }

            smi_cmd_io_port() {


                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();
            }

            acpi_on_value() {


                const b = new DataView(this.#buffer.read(1, 52), 0);
                return b.getUint8();
            }

            acpi_off_value() {


                const b = new DataView(this.#buffer.read(1, 53), 0);
                return b.getUint8();
            }

            s4bios_req() {


                const b = new DataView(this.#buffer.read(1, 54), 0);
                return b.getUint8();
            }

            pstate_control() {


                const b = new DataView(this.#buffer.read(1, 55), 0);
                return b.getUint8();
            }

            pm1a_evt_blk_io_port() {


                const b = new DataView(this.#buffer.read(4, 56), 0);
                return b.getUint32();
            }

            pm1b_evt_blk_io_port() {


                const b = new DataView(this.#buffer.read(4, 60), 0);
                return b.getUint32();
            }

            pm1a_ctrl_blk_io_port() {


                const b = new DataView(this.#buffer.read(4, 64), 0);
                return b.getUint32();
            }

            pm1b_ctrl_blk_io_port() {


                const b = new DataView(this.#buffer.read(4, 68), 0);
                return b.getUint32();
            }

            pm2_ctrl_blk_io_port() {


                const b = new DataView(this.#buffer.read(4, 72), 0);
                return b.getUint32();
            }

            pm_tmr_blk_io_port() {


                const b = new DataView(this.#buffer.read(4, 76), 0);
                return b.getUint32();
            }

            gp0_blk_io_port() {


                const b = new DataView(this.#buffer.read(4, 80), 0);
                return b.getUint32();
            }

            gp1_blk_io_port() {


                const b = new DataView(this.#buffer.read(4, 84), 0);
                return b.getUint32();
            }

            pm1_evt_len() {


                const b = new DataView(this.#buffer.read(1, 88), 0);
                return b.getUint8();
            }

            pm1_ctrl_len() {


                const b = new DataView(this.#buffer.read(1, 89), 0);
                return b.getUint8();
            }

            pm2_ctrl_len() {


                const b = new DataView(this.#buffer.read(1, 90), 0);
                return b.getUint8();
            }

            pm_tmr_len() {


                const b = new DataView(this.#buffer.read(1, 91), 0);
                return b.getUint8();
            }

            gp0_blk_len() {


                const b = new DataView(this.#buffer.read(1, 92), 0);
                return b.getUint8();
            }

            gp1_blk_len() {


                const b = new DataView(this.#buffer.read(1, 93), 0);
                return b.getUint8();
            }

            gp1_base() {


                const b = new DataView(this.#buffer.read(1, 94), 0);
                return b.getUint8();
            }

            cstate_control() {


                const b = new DataView(this.#buffer.read(1, 95), 0);
                return b.getUint8();
            }

            lvl2_latency() {


                const b = new DataView(this.#buffer.read(2, 96), 0);
                return b.getUint16();
            }

            lvl3_latency() {


                const b = new DataView(this.#buffer.read(2, 98), 0);
                return b.getUint16();
            }

            flush_size() {


                const b = new DataView(this.#buffer.read(2, 100), 0);
                return b.getUint16();
            }

            flush_stride() {


                const b = new DataView(this.#buffer.read(2, 102), 0);
                return b.getUint16();
            }

            duty_offset() {


                const b = new DataView(this.#buffer.read(1, 104), 0);
                return b.getUint8();
            }

            duty_width() {


                const b = new DataView(this.#buffer.read(1, 105), 0);
                return b.getUint8();
            }

            day_alarm_index() {


                const b = new DataView(this.#buffer.read(1, 106), 0);
                return b.getUint8();
            }

            month_alarm_index() {


                const b = new DataView(this.#buffer.read(1, 107), 0);
                return b.getUint8();
            }

            century_alarm_index() {


                const b = new DataView(this.#buffer.read(1, 108), 0);
                return b.getUint8();
            }

            boot_arch() {


                const b = new DataView(this.#buffer.read(2, 109), 0);
                return b.getUint16();
            }

            reserved3(arg) {

                // array
                return this.#buffer.read(1, (111 + (1 * arg));

            }

            flags() {


                const b = new DataView(this.#buffer.read(4, 112), 0);
                return b.getUint32();
            }

            reset_reg() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 116)
            }

            reset_val() {


                const b = new DataView(this.#buffer.read(1, 128), 0);
                return b.getUint8();
            }

            arm_boot_arch() {


                const b = new DataView(this.#buffer.read(2, 129), 0);
                return b.getUint16();
            }

            minor_version_number() {


                const b = new DataView(this.#buffer.read(1, 131), 0);
                return b.getUint8();
            }

            x_firmware_ctrl() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 132)
            }

            x_dsdt() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 140)
            }

            x_pm1a_evt_blk() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 148)
            }

            x_pm1b_evt_blk() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 160)
            }

            x_pm1a_ctrl_blk() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 172)
            }

            x_pm1b_ctrl_blk() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 184)
            }

            x_pm2_ctrl_blk() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 196)
            }

            x_pm_tmr_blk() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 208)
            }

            x_gp0_blk() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 220)
            }

            x_gp1_blk() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 232)
            }

            sleep_control_reg() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 244)
            }

            sleep_status_reg() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    AddressSpaceID() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    BitWidth() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    BitOffset() {


                        const b = new DataView(this.#buffer.read(1, 2), 0);
                        return b.getUint8();
                    }

                    AccessSize() {


                        const b = new DataView(this.#buffer.read(1, 3), 0);
                        return b.getUint8();
                    }

                    Address() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 4)
                    }

                }
                return new cls(this.#buffer.address() + 256)
            }

        }
        _PROCLOCALAPIC: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Length() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            ACPIProcessorID() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            APICID() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        _RSDT_32: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            Header() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 36);
                    }

                ,

                    Signature() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Length() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Revision() {


                        const b = new DataView(this.#buffer.read(1, 8), 0);
                        return b.getUint8();
                    }

                    Checksum() {


                        const b = new DataView(this.#buffer.read(1, 9), 0);
                        return b.getUint8();
                    }

                    OEMID(arg) {

                        // array
                        return this.#buffer.read(1, (10 + (1 * arg));

                    }

                    OEMTableID(arg) {

                        // array
                        return this.#buffer.read(1, (16 + (1 * arg));

                    }

                    OEMRevision() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    CreatorID(arg) {

                        // array
                        return this.#buffer.read(1, (28 + (1 * arg));

                    }

                    CreatorRev() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Tables(arg) {

                // array
                return this.#buffer.read(4, (36 + (4 * arg));

            }

        }
        _LOCAL_NMISOURCE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 6);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Length() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            ProcessorID() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(2, 3), 0);
                return b.getUint16();
            }

            LINTIN() {


                const b = new DataView(this.#buffer.read(1, 5), 0);
                return b.getUint8();
            }

        }
        _CM_RESOURCE_LIST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            Count() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            List(arg) {
                内置struct
            }

        }
        _SECURITY_QUALITY_OF_SERVICE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            ImpersonationLevel() {

                // enum
                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();

            }

            ContextTrackingMode() {


                const b = new DataView(this.#buffer.read(1, 8), 0);
                return b.getUint8();
            }

            EffectiveOnly() {


                const b = new DataView(this.#buffer.read(1, 9), 0);
                return b.getUint8();
            }

        }
        _WHEA_EVENT_LOG_ENTRY_HEADER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Signature() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Version() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Type() {

                // enum
                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();

            }

            OwnerTag() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Id() {

                // enum
                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();

            }

            Flags() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 4);
                    }

                ,

                    Reserved() {

                        return this.#buffer.bits().rd(0, 32);

                    }

                    AsULONG() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            PayloadLength() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

        }
        _INTERRUPT_FUNCTION_TABLE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 176);
            }

        ,

            InitializeLocalUnit() {

                return this.#buffer.pointer(0);
            }

            InitializeIoUnit() {

                return this.#buffer.pointer(8);
            }

            SetPriority() {

                return this.#buffer.pointer(16);
            }

            GetLocalUnitError() {

                return this.#buffer.pointer(24);
            }

            ClearLocalUnitError() {

                return this.#buffer.pointer(32);
            }

            GetLogicalId() {

                return this.#buffer.pointer(40);
            }

            SetLogicalId() {

                return this.#buffer.pointer(48);
            }

            AcceptAndGetSource() {

                return this.#buffer.pointer(56);
            }

            EndOfInterrupt() {

                return this.#buffer.pointer(64);
            }

            FastEndOfInterrupt() {

                return this.#buffer.pointer(72);
            }

            SetLineState() {

                return this.#buffer.pointer(80);
            }

            RequestInterrupt() {

                return this.#buffer.pointer(88);
            }

            StartProcessor() {

                return this.#buffer.pointer(96);
            }

            GenerateMessage() {

                return this.#buffer.pointer(104);
            }

            ConvertId() {

                return this.#buffer.pointer(112);
            }

            SaveLocalInterrupts() {

                return this.#buffer.pointer(120);
            }

            ReplayLocalInterrupts() {

                return this.#buffer.pointer(128);
            }

            DeinitializeLocalUnit() {

                return this.#buffer.pointer(136);
            }

            DeinitializeIoUnit() {

                return this.#buffer.pointer(144);
            }

            QueryAndGetSource() {

                return this.#buffer.pointer(152);
            }

            DeactivateInterrupt() {

                return this.#buffer.pointer(160);
            }

            DirectedEndOfInterrupt() {

                return this.#buffer.pointer(168);
            }

        }
        _PLATFORM_INTERRUPT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Length() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            InterruptType() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

            APICID() {


                const b = new DataView(this.#buffer.read(1, 5), 0);
                return b.getUint8();
            }

            ACPIEID() {


                const b = new DataView(this.#buffer.read(1, 6), 0);
                return b.getUint8();
            }

            IOSAPICVector() {


                const b = new DataView(this.#buffer.read(1, 7), 0);
                return b.getUint8();
            }

            GlobalVector() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

        }
        _ADAPTER_OBJECT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 592);
            }

        ,

            AdapterObject() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 152);
                    }

                ,

                    DmaHeader() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Version() {


                                const b = new DataView(this.#buffer.read(2, 0), 0);
                                return b.getUint16();
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(2, 2), 0);
                                return b.getUint16();
                            }

                            DmaOperations() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    ContiguousMapRegisters() {

                        return this.#buffer.pointer(16);
                    }

                    ScatterBufferListHead() {

                        return this.#buffer.pointer(24);
                    }

                    NumberOfFreeScatterBuffers() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    ContiguousTranslations() {

                        return this.#buffer.pointer(40);
                    }

                    ScatterTranslations() {

                        return this.#buffer.pointer(48);
                    }

                    ContiguousTranslationEnd() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Buffer() {

                                return this.#buffer.pointer(0);
                            }

                            Offset() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 56)
                    }

                    ScatterTranslationEnd() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Buffer() {

                                return this.#buffer.pointer(0);
                            }

                            Offset() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 72)
                    }

                    CrashDump() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            ContiguousHint() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Buffer() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Offset() {


                                        const b = new DataView(this.#buffer.read(4, 8), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            ScatterHint() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Buffer() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Offset() {


                                        const b = new DataView(this.#buffer.read(4, 8), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 88)
                    }

                    SpinLock() {


                        const b = new DataView(this.#buffer.read(8, 120), 0);
                        return b.getBigInt64();
                    }

                    GrowLock() {


                        const b = new DataView(this.#buffer.read(8, 128), 0);
                        return b.getBigInt64();
                    }

                    MaximumPhysicalAddress() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 136)
                    }

                    IsMasterAdapter() {


                        const b = new DataView(this.#buffer.read(1, 144), 0);
                        return b.getUint8();
                    }

                    DmaCanCross64K() {


                        const b = new DataView(this.#buffer.read(1, 145), 0);
                        return b.getUint8();
                    }

                    LibraryVersion() {


                        const b = new DataView(this.#buffer.read(4, 148), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            MasterAdapter() {

                return this.#buffer.pointer(152);
            }

            WaitQueueEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 160)
            }

            ChannelWaitQueue() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 40);
                    }

                ,

                    Type() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    Size() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    DeviceListHead() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 8)
                    }

                    Lock() {


                        const b = new DataView(this.#buffer.read(8, 24), 0);
                        return b.getBigInt64();
                    }

                    Busy() {


                        const b = new DataView(this.#buffer.read(1, 32), 0);
                        return b.getUint8();
                    }

                    Reserved() {

                        return this.#buffer.bits().rd(0, 8);

                    }

                    Hint() {

                        return this.#buffer.bits().rd(8, 56);

                    }

                }
                return new cls(this.#buffer.address() + 176)
            }

            ResourceWaitLock() {


                const b = new DataView(this.#buffer.read(8, 176), 0);
                return b.getBigInt64();
            }

            ResourceWaitQueue() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 184)
            }

            ChannelResourceWaitQueue() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 200)
            }

            ResourceQueueBusy() {


                const b = new DataView(this.#buffer.read(1, 216), 0);
                return b.getUint8();
            }

            MapRegistersPerChannel() {


                const b = new DataView(this.#buffer.read(4, 224), 0);
                return b.getUint32();
            }

            MapRegisterBase() {

                return this.#buffer.pointer(232);
            }

            NumberOfMapRegisters() {


                const b = new DataView(this.#buffer.read(4, 240), 0);
                return b.getUint32();
            }

            MaxTransferLength() {


                const b = new DataView(this.#buffer.read(4, 244), 0);
                return b.getUint32();
            }

            CrashDumpRegisterBase(arg) {

                // array
                return this.#buffer.read(8, (248 + (8 * arg));

            }

            NumberOfCrashDumpRegisters(arg) {

                // array
                return this.#buffer.read(4, (264 + (4 * arg));

            }

            CrashDumpRegisterRefCount(arg) {

                // array
                return this.#buffer.read(4, (272 + (4 * arg));

            }

            AdapterCrashDumpList() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 280)
            }

            MapRegisterMdl() {

                return this.#buffer.pointer(296);
            }

            MapRegisterMdlLock() {


                const b = new DataView(this.#buffer.read(8, 304), 0);
                return b.getBigInt64();
            }

            AllocationHandle() {

                return this.#buffer.pointer(312);
            }

            VirtualAddress() {

                return this.#buffer.pointer(320);
            }

            IsAllocationMdlBased() {


                const b = new DataView(this.#buffer.read(1, 328), 0);
                return b.getUint8();
            }

            NoLocalPool() {


                const b = new DataView(this.#buffer.read(1, 329), 0);
                return b.getUint8();
            }

            CurrentWcb() {

                return this.#buffer.pointer(336);
            }

            CurrentTransferContext() {

                return this.#buffer.pointer(344);
            }

            DmaController() {

                return this.#buffer.pointer(352);
            }

            Controller() {


                const b = new DataView(this.#buffer.read(4, 360), 0);
                return b.getUint32();
            }

            ChannelNumber() {


                const b = new DataView(this.#buffer.read(4, 364), 0);
                return b.getUint32();
            }

            RequestLine() {


                const b = new DataView(this.#buffer.read(4, 368), 0);
                return b.getUint32();
            }

            RequestedChannelCount() {


                const b = new DataView(this.#buffer.read(4, 372), 0);
                return b.getUint32();
            }

            AllocatedChannelCount() {


                const b = new DataView(this.#buffer.read(4, 376), 0);
                return b.getUint32();
            }

            AllocatedChannels(arg) {

                // array
                return this.#buffer.read(4, (380 + (4 * arg));

            }

            ChannelAdapter() {

                return this.#buffer.pointer(416);
            }

            NeedsMapRegisters() {


                const b = new DataView(this.#buffer.read(1, 424), 0);
                return b.getUint8();
            }

            MasterDevice() {


                const b = new DataView(this.#buffer.read(1, 425), 0);
                return b.getUint8();
            }

            ScatterGather() {


                const b = new DataView(this.#buffer.read(1, 426), 0);
                return b.getUint8();
            }

            AutoInitialize() {


                const b = new DataView(this.#buffer.read(1, 427), 0);
                return b.getUint8();
            }

            IgnoreCount() {


                const b = new DataView(this.#buffer.read(1, 428), 0);
                return b.getUint8();
            }

            CacheCoherent() {


                const b = new DataView(this.#buffer.read(1, 429), 0);
                return b.getUint8();
            }

            Dma32BitAddresses() {


                const b = new DataView(this.#buffer.read(1, 432), 0);
                return b.getUint8();
            }

            Dma64BitAddresses() {


                const b = new DataView(this.#buffer.read(1, 433), 0);
                return b.getUint8();
            }

            DmaAddressWidth() {


                const b = new DataView(this.#buffer.read(4, 432), 0);
                return b.getUint32();
            }

            DmaPortWidth() {

                // enum
                const b = new DataView(this.#buffer.read(4, 436), 0);
                return b.getUint32();

            }

            DeviceAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 440)
            }

            AdapterList() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 448)
            }

            WorkItem() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 32);
                    }

                ,

                    List() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    WorkerRoutine() {

                        return this.#buffer.pointer(16);
                    }

                    Parameter() {

                        return this.#buffer.pointer(24);
                    }

                }
                return new cls(this.#buffer.address() + 464)
            }

            DomainPointer() {

                return this.#buffer.pointer(496);
            }

            TranslationType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 504), 0);
                return b.getUint32();

            }

            AdapterInUse() {


                const b = new DataView(this.#buffer.read(1, 508), 0);
                return b.getUint8();
            }

            DeviceObject() {

                return this.#buffer.pointer(512);
            }

            DeviceId() {

                return this.#buffer.pointer(520);
            }

            IommuDevice() {

                return this.#buffer.pointer(528);
            }

            ScatterGatherMdl() {

                return this.#buffer.pointer(536);
            }

            LowMemoryLogicalAddressBase() {


                const b = new DataView(this.#buffer.read(8, 544), 0);
                return b.getBigInt64();
            }

            LowMemoryLogicalAddressQueueFlags() {


                const b = new DataView(this.#buffer.read(4, 552), 0);
                return b.getUint32();
            }

            LowMemoryLogicalAddressInUse() {

                return this.#buffer.bits().rd(0, 1);

            }

            WaitingOnLowMemoryLogicalAddress() {

                return this.#buffer.bits().rd(1, 1);

            }

            LowMemoryLogicalAddressQueueLock() {


                const b = new DataView(this.#buffer.read(8, 560), 0);
                return b.getBigInt64();
            }

            AllocationState() {

                // enum
                const b = new DataView(this.#buffer.read(4, 568), 0);
                return b.getUint32();

            }

            ScatterGatherBufferLength() {


                const b = new DataView(this.#buffer.read(4, 572), 0);
                return b.getUint32();
            }

            ScatterGatherBuffer() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    NumberOfElements() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Reserved() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                    Elements(arg) {
                        内置struct
                    }

                }
                return new cls(this.#buffer.address() + 576)
            }

        }
        _RSDP: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 36);
            }

        ,

            Signature() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Checksum() {


                const b = new DataView(this.#buffer.read(1, 8), 0);
                return b.getUint8();
            }

            OEMID(arg) {

                // array
                return this.#buffer.read(1, (9 + (1 * arg));

            }

            Revision() {


                const b = new DataView(this.#buffer.read(1, 15), 0);
                return b.getUint8();
            }

            RsdtAddress() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            XsdtAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            XChecksum() {


                const b = new DataView(this.#buffer.read(1, 32), 0);
                return b.getUint8();
            }

            Reserved(arg) {

                // array
                return this.#buffer.read(1, (33 + (1 * arg));

            }

        }
        _XSDT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 44);
            }

        ,

            Header() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 36);
                    }

                ,

                    Signature() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Length() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Revision() {


                        const b = new DataView(this.#buffer.read(1, 8), 0);
                        return b.getUint8();
                    }

                    Checksum() {


                        const b = new DataView(this.#buffer.read(1, 9), 0);
                        return b.getUint8();
                    }

                    OEMID(arg) {

                        // array
                        return this.#buffer.read(1, (10 + (1 * arg));

                    }

                    OEMTableID(arg) {

                        // array
                        return this.#buffer.read(1, (16 + (1 * arg));

                    }

                    OEMRevision() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    CreatorID(arg) {

                        // array
                        return this.#buffer.read(1, (28 + (1 * arg));

                    }

                    CreatorRev() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Tables(arg) {
                内置struct
            }

        }
        _CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 1232);
            }

        ,

            P1Home() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            P2Home() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

            P3Home() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

            P4Home() {


                const b = new DataView(this.#buffer.read(8, 24), 0);
                return b.getBigInt64();
            }

            P5Home() {


                const b = new DataView(this.#buffer.read(8, 32), 0);
                return b.getBigInt64();
            }

            P6Home() {


                const b = new DataView(this.#buffer.read(8, 40), 0);
                return b.getBigInt64();
            }

            ContextFlags() {


                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();
            }

            MxCsr() {


                const b = new DataView(this.#buffer.read(4, 52), 0);
                return b.getUint32();
            }

            SegCs() {


                const b = new DataView(this.#buffer.read(2, 56), 0);
                return b.getUint16();
            }

            SegDs() {


                const b = new DataView(this.#buffer.read(2, 58), 0);
                return b.getUint16();
            }

            SegEs() {


                const b = new DataView(this.#buffer.read(2, 60), 0);
                return b.getUint16();
            }

            SegFs() {


                const b = new DataView(this.#buffer.read(2, 62), 0);
                return b.getUint16();
            }

            SegGs() {


                const b = new DataView(this.#buffer.read(2, 64), 0);
                return b.getUint16();
            }

            SegSs() {


                const b = new DataView(this.#buffer.read(2, 66), 0);
                return b.getUint16();
            }

            EFlags() {


                const b = new DataView(this.#buffer.read(4, 68), 0);
                return b.getUint32();
            }

            Dr0() {


                const b = new DataView(this.#buffer.read(8, 72), 0);
                return b.getBigInt64();
            }

            Dr1() {


                const b = new DataView(this.#buffer.read(8, 80), 0);
                return b.getBigInt64();
            }

            Dr2() {


                const b = new DataView(this.#buffer.read(8, 88), 0);
                return b.getBigInt64();
            }

            Dr3() {


                const b = new DataView(this.#buffer.read(8, 96), 0);
                return b.getBigInt64();
            }

            Dr6() {


                const b = new DataView(this.#buffer.read(8, 104), 0);
                return b.getBigInt64();
            }

            Dr7() {


                const b = new DataView(this.#buffer.read(8, 112), 0);
                return b.getBigInt64();
            }

            Rax() {


                const b = new DataView(this.#buffer.read(8, 120), 0);
                return b.getBigInt64();
            }

            Rcx() {


                const b = new DataView(this.#buffer.read(8, 128), 0);
                return b.getBigInt64();
            }

            Rdx() {


                const b = new DataView(this.#buffer.read(8, 136), 0);
                return b.getBigInt64();
            }

            Rbx() {


                const b = new DataView(this.#buffer.read(8, 144), 0);
                return b.getBigInt64();
            }

            Rsp() {


                const b = new DataView(this.#buffer.read(8, 152), 0);
                return b.getBigInt64();
            }

            Rbp() {


                const b = new DataView(this.#buffer.read(8, 160), 0);
                return b.getBigInt64();
            }

            Rsi() {


                const b = new DataView(this.#buffer.read(8, 168), 0);
                return b.getBigInt64();
            }

            Rdi() {


                const b = new DataView(this.#buffer.read(8, 176), 0);
                return b.getBigInt64();
            }

            R8() {


                const b = new DataView(this.#buffer.read(8, 184), 0);
                return b.getBigInt64();
            }

            R9() {


                const b = new DataView(this.#buffer.read(8, 192), 0);
                return b.getBigInt64();
            }

            R10() {


                const b = new DataView(this.#buffer.read(8, 200), 0);
                return b.getBigInt64();
            }

            R11() {


                const b = new DataView(this.#buffer.read(8, 208), 0);
                return b.getBigInt64();
            }

            R12() {


                const b = new DataView(this.#buffer.read(8, 216), 0);
                return b.getBigInt64();
            }

            R13() {


                const b = new DataView(this.#buffer.read(8, 224), 0);
                return b.getBigInt64();
            }

            R14() {


                const b = new DataView(this.#buffer.read(8, 232), 0);
                return b.getBigInt64();
            }

            R15() {


                const b = new DataView(this.#buffer.read(8, 240), 0);
                return b.getBigInt64();
            }

            Rip() {


                const b = new DataView(this.#buffer.read(8, 248), 0);
                return b.getBigInt64();
            }

            FltSave() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 512);
                    }

                ,

                    ControlWord() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    StatusWord() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    TagWord() {


                        const b = new DataView(this.#buffer.read(1, 4), 0);
                        return b.getUint8();
                    }

                    Reserved1() {


                        const b = new DataView(this.#buffer.read(1, 5), 0);
                        return b.getUint8();
                    }

                    ErrorOpcode() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    ErrorOffset() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                    ErrorSelector() {


                        const b = new DataView(this.#buffer.read(2, 12), 0);
                        return b.getUint16();
                    }

                    Reserved2() {


                        const b = new DataView(this.#buffer.read(2, 14), 0);
                        return b.getUint16();
                    }

                    DataOffset() {


                        const b = new DataView(this.#buffer.read(4, 16), 0);
                        return b.getUint32();
                    }

                    DataSelector() {


                        const b = new DataView(this.#buffer.read(2, 20), 0);
                        return b.getUint16();
                    }

                    Reserved3() {


                        const b = new DataView(this.#buffer.read(2, 22), 0);
                        return b.getUint16();
                    }

                    MxCsr() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    MxCsr_Mask() {


                        const b = new DataView(this.#buffer.read(4, 28), 0);
                        return b.getUint32();
                    }

                    FloatRegisters(arg) {
                        内置struct
                    }

                    XmmRegisters(arg) {
                        内置struct
                    }

                    Reserved4(arg) {

                        // array
                        return this.#buffer.read(1, (416 + (1 * arg));

                    }

                }
                return new cls(this.#buffer.address() + 256)
            }

            Header(arg) {
                内置struct
            }

            Legacy(arg) {
                内置struct
            }

            Xmm0() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 416)
            }

            Xmm1() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 432)
            }

            Xmm2() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 448)
            }

            Xmm3() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 464)
            }

            Xmm4() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 480)
            }

            Xmm5() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 496)
            }

            Xmm6() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 512)
            }

            Xmm7() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 528)
            }

            Xmm8() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 544)
            }

            Xmm9() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 560)
            }

            Xmm10() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 576)
            }

            Xmm11() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 592)
            }

            Xmm12() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 608)
            }

            Xmm13() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 624)
            }

            Xmm14() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 640)
            }

            Xmm15() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    High() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 656)
            }

            VectorRegister(arg) {
                内置struct
            }

            VectorControl() {


                const b = new DataView(this.#buffer.read(8, 1184), 0);
                return b.getBigInt64();
            }

            DebugControl() {


                const b = new DataView(this.#buffer.read(8, 1192), 0);
                return b.getBigInt64();
            }

            LastBranchToRip() {


                const b = new DataView(this.#buffer.read(8, 1200), 0);
                return b.getBigInt64();
            }

            LastBranchFromRip() {


                const b = new DataView(this.#buffer.read(8, 1208), 0);
                return b.getBigInt64();
            }

            LastExceptionToRip() {


                const b = new DataView(this.#buffer.read(8, 1216), 0);
                return b.getBigInt64();
            }

            LastExceptionFromRip() {


                const b = new DataView(this.#buffer.read(8, 1224), 0);
                return b.getBigInt64();
            }

        }
        _IOAPIC: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Length() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            IOAPICID() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            IOAPICAddress() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            SystemVectorBase() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _IO_STATUS_BLOCK: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Status() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Pointer() {

                return this.#buffer.pointer(0);
            }

            Information() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        _M128A: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Low() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            High() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        _INTERRUPT_LINE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            UnitId() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Line() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        _HALP_DMA_CONTROLLER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 224);
            }

        ,

            Controllers() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            AdapterList() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            ControllerId() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            MinimumRequestLine() {


                const b = new DataView(this.#buffer.read(4, 36), 0);
                return b.getUint32();
            }

            MaximumRequestLine() {


                const b = new DataView(this.#buffer.read(4, 40), 0);
                return b.getUint32();
            }

            ChannelCount() {


                const b = new DataView(this.#buffer.read(4, 44), 0);
                return b.getUint32();
            }

            ScatterGatherLimit() {


                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();
            }

            Channels() {

                return this.#buffer.pointer(56);
            }

            ExtensionData() {

                return this.#buffer.pointer(64);
            }

            CacheCoherent() {


                const b = new DataView(this.#buffer.read(1, 72), 0);
                return b.getUint8();
            }

            DmaAddressWidth() {


                const b = new DataView(this.#buffer.read(4, 76), 0);
                return b.getUint32();
            }

            Operations() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 80);
                    }

                ,

                    InitializeController() {

                        return this.#buffer.pointer(0);
                    }

                    ValidateRequestLineBinding() {

                        return this.#buffer.pointer(8);
                    }

                    QueryMaxFragments() {

                        return this.#buffer.pointer(16);
                    }

                    ProgramChannel() {

                        return this.#buffer.pointer(24);
                    }

                    ConfigureChannel() {

                        return this.#buffer.pointer(32);
                    }

                    FlushChannel() {

                        return this.#buffer.pointer(40);
                    }

                    HandleInterrupt() {

                        return this.#buffer.pointer(48);
                    }

                    ReadDmaCounter() {

                        return this.#buffer.pointer(56);
                    }

                    ReportCommonBuffer() {

                        return this.#buffer.pointer(64);
                    }

                    CancelTransfer() {

                        return this.#buffer.pointer(72);
                    }

                }
                return new cls(this.#buffer.address() + 80)
            }

            SupportedPortWidths() {


                const b = new DataView(this.#buffer.read(4, 160), 0);
                return b.getUint32();
            }

            MinimumTransferUnit() {


                const b = new DataView(this.#buffer.read(4, 164), 0);
                return b.getUint32();
            }

            Lock() {


                const b = new DataView(this.#buffer.read(8, 168), 0);
                return b.getBigInt64();
            }

            Irql() {


                const b = new DataView(this.#buffer.read(1, 176), 0);
                return b.getUint8();
            }

            GeneratesInterrupt() {


                const b = new DataView(this.#buffer.read(1, 177), 0);
                return b.getUint8();
            }

            Gsi() {


                const b = new DataView(this.#buffer.read(4, 180), 0);
                return b.getUint32();
            }

            InterruptPolarity() {

                // enum
                const b = new DataView(this.#buffer.read(4, 184), 0);
                return b.getUint32();

            }

            InterruptMode() {

                // enum
                const b = new DataView(this.#buffer.read(4, 188), 0);
                return b.getUint32();

            }

            ResourceId() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Length() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    MaximumLength() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Buffer() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 192)
            }

            PowerHandle() {

                return this.#buffer.pointer(208);
            }

            PowerActive() {


                const b = new DataView(this.#buffer.read(1, 216), 0);
                return b.getUint8();
            }

        }
        _HAL_INTEL_ENLIGHTENMENT_INFORMATION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 480);
            }

        ,

            Enlightenments() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            HypervisorConnected() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            EndOfInterrupt() {

                return this.#buffer.pointer(8);
            }

            ApicWriteIcr() {

                return this.#buffer.pointer(16);
            }

            Reserved0() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            SpinCountMask() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

            LongSpinWait() {

                return this.#buffer.pointer(32);
            }

            GetReferenceTime() {

                return this.#buffer.pointer(40);
            }

            SetSystemSleepProperty() {

                return this.#buffer.pointer(48);
            }

            EnterSleepState() {

                return this.#buffer.pointer(56);
            }

            NotifyDebugDeviceAvailable() {

                return this.#buffer.pointer(64);
            }

            MapDeviceInterrupt() {

                return this.#buffer.pointer(72);
            }

            UnmapDeviceInterrupt() {

                return this.#buffer.pointer(80);
            }

            RetargetDeviceInterrupt() {

                return this.#buffer.pointer(88);
            }

            SetHpetConfig() {

                return this.#buffer.pointer(96);
            }

            NotifyHpetEnabled() {

                return this.#buffer.pointer(104);
            }

            QueryAssociatedProcessors() {

                return this.#buffer.pointer(112);
            }

            ReadMultipleMsr() {

                return this.#buffer.pointer(120);
            }

            WriteMultipleMsr() {

                return this.#buffer.pointer(128);
            }

            ReadCpuid() {

                return this.#buffer.pointer(136);
            }

            LpWritebackInvalidate() {

                return this.#buffer.pointer(144);
            }

            GetMachineCheckContext() {

                return this.#buffer.pointer(152);
            }

            SuspendPartition() {

                return this.#buffer.pointer(160);
            }

            ResumePartition() {

                return this.#buffer.pointer(168);
            }

            SetSystemMachineCheckProperty() {

                return this.#buffer.pointer(176);
            }

            WheaErrorNotification() {

                return this.#buffer.pointer(184);
            }

            GetProcessorIndexFromVpIndex() {

                return this.#buffer.pointer(192);
            }

            SyntheticClusterIpi() {

                return this.#buffer.pointer(200);
            }

            VpStartEnabled() {

                return this.#buffer.pointer(208);
            }

            StartVirtualProcessor() {

                return this.#buffer.pointer(216);
            }

            GetVpIndexFromApicId() {

                return this.#buffer.pointer(224);
            }

            IumAccessPciDevice() {

                return this.#buffer.pointer(232);
            }

            IumEfiRuntimeService() {

                return this.#buffer.pointer(240);
            }

            SvmGetSystemCapabilities() {

                return this.#buffer.pointer(248);
            }

            SvmGetDeviceCapabilities() {

                return this.#buffer.pointer(256);
            }

            SvmCreatePasidSpace() {

                return this.#buffer.pointer(264);
            }

            SvmSetPasidAddressSpace() {

                return this.#buffer.pointer(272);
            }

            SvmFlushPasid() {

                return this.#buffer.pointer(280);
            }

            SvmAttachPasidSpace() {

                return this.#buffer.pointer(288);
            }

            SvmDetachPasidSpace() {

                return this.#buffer.pointer(296);
            }

            SvmEnablePasid() {

                return this.#buffer.pointer(304);
            }

            SvmDisablePasid() {

                return this.#buffer.pointer(312);
            }

            SvmAcknowledgePageRequest() {

                return this.#buffer.pointer(320);
            }

            SvmCreatePrQueue() {

                return this.#buffer.pointer(328);
            }

            SvmDeletePrQueue() {

                return this.#buffer.pointer(336);
            }

            SvmClearPrqStalled() {

                return this.#buffer.pointer(344);
            }

            SvmSetDeviceEnabled() {

                return this.#buffer.pointer(352);
            }

            HvDebuggerPowerHandler() {

                return this.#buffer.pointer(360);
            }

            SetQpcBias() {

                return this.#buffer.pointer(368);
            }

            GetQpcBias() {

                return this.#buffer.pointer(376);
            }

            RegisterDeviceId() {

                return this.#buffer.pointer(384);
            }

            UnregisterDeviceId() {

                return this.#buffer.pointer(392);
            }

            AllocateDeviceDomain() {

                return this.#buffer.pointer(400);
            }

            AttachDeviceDomain() {

                return this.#buffer.pointer(408);
            }

            DetachDeviceDomain() {

                return this.#buffer.pointer(416);
            }

            DeleteDeviceDomain() {

                return this.#buffer.pointer(424);
            }

            MapDeviceLogicalRange() {

                return this.#buffer.pointer(432);
            }

            UnmapDeviceLogicalRange() {

                return this.#buffer.pointer(440);
            }

            MapDeviceSparsePages() {

                return this.#buffer.pointer(448);
            }

            UnmapDeviceSparsePages() {

                return this.#buffer.pointer(456);
            }

            GetDmaGuardEnabled() {

                return this.#buffer.pointer(464);
            }

            UpdateMicrocode() {

                return this.#buffer.pointer(472);
            }

        }
        _DESCRIPTION_HEADER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 36);
            }

        ,

            Signature() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Revision() {


                const b = new DataView(this.#buffer.read(1, 8), 0);
                return b.getUint8();
            }

            Checksum() {


                const b = new DataView(this.#buffer.read(1, 9), 0);
                return b.getUint8();
            }

            OEMID(arg) {

                // array
                return this.#buffer.read(1, (10 + (1 * arg));

            }

            OEMTableID(arg) {

                // array
                return this.#buffer.read(1, (16 + (1 * arg));

            }

            OEMRevision() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            CreatorID(arg) {

                // array
                return this.#buffer.read(1, (28 + (1 * arg));

            }

            CreatorRev() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

        }
        _CONTROLLER_OBJECT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 72);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            ControllerExtension() {

                return this.#buffer.pointer(8);
            }

            DeviceWaitQueue() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 40);
                    }

                ,

                    Type() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    Size() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    DeviceListHead() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 8)
                    }

                    Lock() {


                        const b = new DataView(this.#buffer.read(8, 24), 0);
                        return b.getBigInt64();
                    }

                    Busy() {


                        const b = new DataView(this.#buffer.read(1, 32), 0);
                        return b.getUint8();
                    }

                    Reserved() {

                        return this.#buffer.bits().rd(0, 8);

                    }

                    Hint() {

                        return this.#buffer.bits().rd(8, 56);

                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            Spare1() {


                const b = new DataView(this.#buffer.read(4, 56), 0);
                return b.getUint32();
            }

            Spare2() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 64)
            }

        }
        _SCATTER_GATHER_LIST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            NumberOfElements() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

            Elements(arg) {
                内置struct
            }

        }
        _HAL_HV_SVM_SYSTEM_CAPABILITIES: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            SvmSupported() {

                return this.#buffer.bits().rd(0, 1);

            }

            GpaAlwaysValid() {

                return this.#buffer.bits().rd(1, 1);

            }

            MaxPasidSpaceCount() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            MaxPasidSpacePasidCount() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            MaxPrqSize() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            IommuCount() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            MinIommuPasidCount() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

        }
        _HALP_DMA_MASTER_ADAPTER_OBJECT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 216);
            }

        ,

            AdapterObject() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 152);
                    }

                ,

                    DmaHeader() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Version() {


                                const b = new DataView(this.#buffer.read(2, 0), 0);
                                return b.getUint16();
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(2, 2), 0);
                                return b.getUint16();
                            }

                            DmaOperations() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    ContiguousMapRegisters() {

                        return this.#buffer.pointer(16);
                    }

                    ScatterBufferListHead() {

                        return this.#buffer.pointer(24);
                    }

                    NumberOfFreeScatterBuffers() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                    ContiguousTranslations() {

                        return this.#buffer.pointer(40);
                    }

                    ScatterTranslations() {

                        return this.#buffer.pointer(48);
                    }

                    ContiguousTranslationEnd() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Buffer() {

                                return this.#buffer.pointer(0);
                            }

                            Offset() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 56)
                    }

                    ScatterTranslationEnd() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Buffer() {

                                return this.#buffer.pointer(0);
                            }

                            Offset() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 72)
                    }

                    CrashDump() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 32);
                            }

                        ,

                            ContiguousHint() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Buffer() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Offset() {


                                        const b = new DataView(this.#buffer.read(4, 8), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            ScatterHint() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Buffer() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Offset() {


                                        const b = new DataView(this.#buffer.read(4, 8), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 88)
                    }

                    SpinLock() {


                        const b = new DataView(this.#buffer.read(8, 120), 0);
                        return b.getBigInt64();
                    }

                    GrowLock() {


                        const b = new DataView(this.#buffer.read(8, 128), 0);
                        return b.getBigInt64();
                    }

                    MaximumPhysicalAddress() {
                        // union
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            u() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            QuadPart() {


                                const b = new DataView(this.#buffer.read(8, 0), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 136)
                    }

                    IsMasterAdapter() {


                        const b = new DataView(this.#buffer.read(1, 144), 0);
                        return b.getUint8();
                    }

                    DmaCanCross64K() {


                        const b = new DataView(this.#buffer.read(1, 145), 0);
                        return b.getUint8();
                    }

                    LibraryVersion() {


                        const b = new DataView(this.#buffer.read(4, 148), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            ContiguousAdapterQueue() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 152)
            }

            ScatterAdapterQueue() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 168)
            }

            MapBufferSize() {


                const b = new DataView(this.#buffer.read(4, 184), 0);
                return b.getUint32();
            }

            MapBufferPhysicalAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 192)
            }

            ContiguousPageCount() {


                const b = new DataView(this.#buffer.read(4, 200), 0);
                return b.getUint32();
            }

            ContiguousPageLimit() {


                const b = new DataView(this.#buffer.read(4, 204), 0);
                return b.getUint32();
            }

            ScatterPageCount() {


                const b = new DataView(this.#buffer.read(4, 208), 0);
                return b.getUint32();
            }

            ScatterPageLimit() {


                const b = new DataView(this.#buffer.read(4, 212), 0);
                return b.getUint32();
            }

        }
        _TXN_PARAMETER_BLOCK: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            TxFsContext() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            TransactionObject() {

                return this.#buffer.pointer(8);
            }

        }
        _HALP_DMA_CHANNEL: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 160);
            }

        ,

            ChannelNumber() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Initialized() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

            Busy() {


                const b = new DataView(this.#buffer.read(1, 5), 0);
                return b.getUint8();
            }

            Complete() {


                const b = new DataView(this.#buffer.read(1, 6), 0);
                return b.getUint8();
            }

            CurrentCompletionRoutine() {

                return this.#buffer.pointer(8);
            }

            CurrentCompletionContext() {

                return this.#buffer.pointer(16);
            }

            CurrentChildAdapter() {

                return this.#buffer.pointer(24);
            }

            CurrentInterruptType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();

            }

            Dpc() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 64);
                    }

                ,

                    TargetInfoAsUlong() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Type() {


                        const b = new DataView(this.#buffer.read(1, 0), 0);
                        return b.getUint8();
                    }

                    Importance() {


                        const b = new DataView(this.#buffer.read(1, 1), 0);
                        return b.getUint8();
                    }

                    Number() {
                        return '这是修改!'
                    }

                    DpcListEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            Next() {

                                return this.#buffer.pointer(0);
                            }

                        }
                        return new cls(this.#buffer.address() + 8)
                    }

                    ProcessorHistory() {


                        const b = new DataView(this.#buffer.read(8, 16), 0);
                        return b.getBigInt64();
                    }

                    DeferredRoutine() {

                        return this.#buffer.pointer(24);
                    }

                    DeferredContext() {

                        return this.#buffer.pointer(32);
                    }

                    SystemArgument1() {

                        return this.#buffer.pointer(40);
                    }

                    SystemArgument2() {

                        return this.#buffer.pointer(48);
                    }

                    DpcData() {

                        return this.#buffer.pointer(56);
                    }

                }
                return new cls(this.#buffer.address() + 40)
            }

            GeneratesInterrupt() {


                const b = new DataView(this.#buffer.read(1, 104), 0);
                return b.getUint8();
            }

            Gsi() {


                const b = new DataView(this.#buffer.read(4, 108), 0);
                return b.getUint32();
            }

            InterruptPolarity() {

                // enum
                const b = new DataView(this.#buffer.read(4, 112), 0);
                return b.getUint32();

            }

            InterruptMode() {

                // enum
                const b = new DataView(this.#buffer.read(4, 116), 0);
                return b.getUint32();

            }

            CommonBufferLength() {


                const b = new DataView(this.#buffer.read(4, 120), 0);
                return b.getUint32();
            }

            CommonBufferVirtualAddress() {

                return this.#buffer.pointer(128);
            }

            CommonBufferLogicalAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 136)
            }

            AdapterQueue() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 144)
            }

        }
        _GROUP_AFFINITY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Mask() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Group() {


                const b = new DataView(this.#buffer.read(2, 8), 0);
                return b.getUint16();
            }

            Reserved(arg) {

                // array
                return this.#buffer.read(2, (10 + (2 * arg));

            }

        }
        _DMA_ADAPTER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Version() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            DmaOperations() {

                return this.#buffer.pointer(8);
            }

        }
        __unnamed_152f: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Low32() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            High32() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            InterruptData() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        _INTERRUPT_TARGET: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Target() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

            PhysicalTarget() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            LogicalFlatTarget() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            RemapIndex() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            ClusterId() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            ClusterMask() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            HypervisorTarget() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Low32() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    High32() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    InterruptData() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

        }
        _FACS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 64);
            }

        ,

            Signature() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            HardwareSignature() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            pFirmwareWakingVector() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            GlobalLock() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            x_FirmwareWakingVector() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            version() {


                const b = new DataView(this.#buffer.read(1, 32), 0);
                return b.getUint8();
            }

            Reserved(arg) {

                // array
                return this.#buffer.read(1, (33 + (1 * arg));

            }

        }
        _DMA_TRANSFER_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 96);
            }

        ,

            Version() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            V1() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 88);
                    }

                ,

                    DmaState() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    TransferState() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Wcb() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 72);
                            }

                        ,

                            WaitQueueEntry() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 24);
                                    }

                                ,

                                    DeviceListEntry() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 16);
                                            }

                                        ,

                                            Flink() {

                                                return this.#buffer.pointer(0);
                                            }

                                            Blink() {

                                                return this.#buffer.pointer(8);
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    SortKey() {


                                        const b = new DataView(this.#buffer.read(4, 16), 0);
                                        return b.getUint32();
                                    }

                                    Inserted() {


                                        const b = new DataView(this.#buffer.read(1, 20), 0);
                                        return b.getUint8();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            DmaWaitEntry() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            NumberOfChannels() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            SyncCallback() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            DmaContext() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            ZeroMapRegisters() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved() {

                                return this.#buffer.bits().rd(3, 9);

                            }

                            NumberOfRemapPages() {

                                return this.#buffer.bits().rd(12, 20);

                            }

                            DeviceRoutine() {

                                return this.#buffer.pointer(24);
                            }

                            DeviceContext() {

                                return this.#buffer.pointer(32);
                            }

                            NumberOfMapRegisters() {


                                const b = new DataView(this.#buffer.read(4, 40), 0);
                                return b.getUint32();
                            }

                            DeviceObject() {

                                return this.#buffer.pointer(48);
                            }

                            CurrentIrp() {

                                return this.#buffer.pointer(56);
                            }

                            BufferChainingDpc() {

                                return this.#buffer.pointer(64);
                            }

                        }
                        return new cls(this.#buffer.address() + 8)
                    }

                    HalWcb() {

                        return this.#buffer.pointer(80);
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

        }
        _SECONDARY_IC_LIST_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 176);
            }

        ,

            ListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            GsivBase() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            GsivSize() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            Interface() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 88);
                    }

                ,

                    Size() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    Version() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Context() {

                        return this.#buffer.pointer(8);
                    }

                    GsivBase() {


                        const b = new DataView(this.#buffer.read(4, 16), 0);
                        return b.getUint32();
                    }

                    GsivSize() {


                        const b = new DataView(this.#buffer.read(2, 20), 0);
                        return b.getUint16();
                    }

                    DriverObject() {

                        return this.#buffer.pointer(24);
                    }

                    Reserved1() {

                        return this.#buffer.pointer(32);
                    }

                    Reserved2() {

                        return this.#buffer.pointer(40);
                    }

                    Reserved3() {

                        return this.#buffer.pointer(48);
                    }

                    Reserved4() {

                        return this.#buffer.pointer(56);
                    }

                    Reserved5() {

                        return this.#buffer.pointer(64);
                    }

                    Reserved6() {

                        return this.#buffer.pointer(72);
                    }

                    Reserved7() {

                        return this.#buffer.pointer(80);
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            BusyCount() {
                return '这是修改!'
            }

            ExclusiveWaiterCount() {
                return '这是修改!'
            }

            NotificationEvent() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Header() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Lock() {
                                return '这是修改!'
                            }

                            LockNV() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Signalling() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Size() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            TimerType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            TimerControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Absolute() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Wake() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            EncodedTolerableDelay() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            Hand() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            TimerMiscFlags() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            Index() {

                                return this.#buffer.bits().rd(0, 6);

                            }

                            Inserted() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            Expired() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            Timer2Type() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Timer2Flags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Timer2Inserted() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Timer2Expiring() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Timer2CancelPending() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Timer2SetPending() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Timer2Running() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            Timer2Disabled() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            Timer2ReservedFlags() {

                                return this.#buffer.bits().rd(6, 2);

                            }

                            Timer2ComponentId() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Timer2RelativeId() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            QueueType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            QueueControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Abandoned() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            DisableIncrement() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            QueueReservedControlFlags() {

                                return this.#buffer.bits().rd(2, 6);

                            }

                            QueueSize() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            QueueReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ThreadType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            ThreadReserved() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            ThreadControlFlags() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            CycleProfiling() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            CounterProfiling() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            GroupScheduling() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            AffinitySet() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            Tagged() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            EnergyProfiling() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            SchedulerAssist() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            ThreadReservedControlFlags() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            DebugActive() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            ActiveDR7() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            Instrumented() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            Minimal() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            Reserved4() {

                                return this.#buffer.bits().rd(3, 3);

                            }

                            UmsScheduled() {

                                return this.#buffer.bits().rd(6, 1);

                            }

                            UmsPrimary() {

                                return this.#buffer.bits().rd(7, 1);

                            }

                            MutantType() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            MutantSize() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            DpcActive() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            MutantReserved() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            SignalState() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            WaitListHead() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 120)
            }

            SignalListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 144)
            }

            State(arg) {
                内置struct
            }

        }
        _DRIVER_OBJECT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 336);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            DeviceObject() {

                return this.#buffer.pointer(8);
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            DriverStart() {

                return this.#buffer.pointer(24);
            }

            DriverSize() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            DriverSection() {

                return this.#buffer.pointer(40);
            }

            DriverExtension() {

                return this.#buffer.pointer(48);
            }

            DriverName() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Length() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    MaximumLength() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Buffer() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 56)
            }

            HardwareDatabase() {

                return this.#buffer.pointer(72);
            }

            FastIoDispatch() {

                return this.#buffer.pointer(80);
            }

            DriverInit() {

                return this.#buffer.pointer(88);
            }

            DriverStartIo() {

                return this.#buffer.pointer(96);
            }

            DriverUnload() {

                return this.#buffer.pointer(104);
            }

            MajorFunction(arg) {
                内置struct
            }

        }
        _HAL_HV_DMA_DOMAIN_INFO: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            DomainId() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            IsStage1() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

        }
        _HAL_HV_SVM_DEVICE_CAPABILITIES: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            SvmSupported() {

                return this.#buffer.bits().rd(0, 1);

            }

            PciExecute() {

                return this.#buffer.bits().rd(1, 1);

            }

            NoExecute() {

                return this.#buffer.bits().rd(2, 1);

            }

            Reserved() {

                return this.#buffer.bits().rd(3, 28);

            }

            OverflowPossible() {

                return this.#buffer.bits().rd(31, 1);

            }

            PasidCount() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            IommuIndex() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _IO_NMISOURCE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Length() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            GlobalSystemInterruptVector() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        _DRIVER_EXTENSION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            DriverObject() {

                return this.#buffer.pointer(0);
            }

            AddDevice() {

                return this.#buffer.pointer(8);
            }

            Count() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            ServiceKeyName() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Length() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    MaximumLength() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Buffer() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

        }
        _ISA_VECTOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 10);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Length() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Bus() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Source() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            GlobalSystemInterruptVector() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(2, 8), 0);
                return b.getUint16();
            }

        }
        _IO_RESOURCE_LIST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            Version() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Revision() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Count() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Descriptors(arg) {
                内置struct
            }

        }
        _KSPECIAL_REGISTERS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 240);
            }

        ,

            Cr0() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Cr2() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

            Cr3() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

            Cr4() {


                const b = new DataView(this.#buffer.read(8, 24), 0);
                return b.getBigInt64();
            }

            KernelDr0() {


                const b = new DataView(this.#buffer.read(8, 32), 0);
                return b.getBigInt64();
            }

            KernelDr1() {


                const b = new DataView(this.#buffer.read(8, 40), 0);
                return b.getBigInt64();
            }

            KernelDr2() {


                const b = new DataView(this.#buffer.read(8, 48), 0);
                return b.getBigInt64();
            }

            KernelDr3() {


                const b = new DataView(this.#buffer.read(8, 56), 0);
                return b.getBigInt64();
            }

            KernelDr6() {


                const b = new DataView(this.#buffer.read(8, 64), 0);
                return b.getBigInt64();
            }

            KernelDr7() {


                const b = new DataView(this.#buffer.read(8, 72), 0);
                return b.getBigInt64();
            }

            Gdtr() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Pad(arg) {

                        // array
                        return this.#buffer.read(2, (0 + (2 * arg));

                    }

                    Limit() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Base() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 80)
            }

            Idtr() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Pad(arg) {

                        // array
                        return this.#buffer.read(2, (0 + (2 * arg));

                    }

                    Limit() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    Base() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 96)
            }

            Tr() {


                const b = new DataView(this.#buffer.read(2, 112), 0);
                return b.getUint16();
            }

            Ldtr() {


                const b = new DataView(this.#buffer.read(2, 114), 0);
                return b.getUint16();
            }

            MxCsr() {


                const b = new DataView(this.#buffer.read(4, 116), 0);
                return b.getUint32();
            }

            DebugControl() {


                const b = new DataView(this.#buffer.read(8, 120), 0);
                return b.getBigInt64();
            }

            LastBranchToRip() {


                const b = new DataView(this.#buffer.read(8, 128), 0);
                return b.getBigInt64();
            }

            LastBranchFromRip() {


                const b = new DataView(this.#buffer.read(8, 136), 0);
                return b.getBigInt64();
            }

            LastExceptionToRip() {


                const b = new DataView(this.#buffer.read(8, 144), 0);
                return b.getBigInt64();
            }

            LastExceptionFromRip() {


                const b = new DataView(this.#buffer.read(8, 152), 0);
                return b.getBigInt64();
            }

            Cr8() {


                const b = new DataView(this.#buffer.read(8, 160), 0);
                return b.getBigInt64();
            }

            MsrGsBase() {


                const b = new DataView(this.#buffer.read(8, 168), 0);
                return b.getBigInt64();
            }

            MsrGsSwap() {


                const b = new DataView(this.#buffer.read(8, 176), 0);
                return b.getBigInt64();
            }

            MsrStar() {


                const b = new DataView(this.#buffer.read(8, 184), 0);
                return b.getBigInt64();
            }

            MsrLStar() {


                const b = new DataView(this.#buffer.read(8, 192), 0);
                return b.getBigInt64();
            }

            MsrCStar() {


                const b = new DataView(this.#buffer.read(8, 200), 0);
                return b.getBigInt64();
            }

            MsrSyscallMask() {


                const b = new DataView(this.#buffer.read(8, 208), 0);
                return b.getBigInt64();
            }

            Xcr0() {


                const b = new DataView(this.#buffer.read(8, 216), 0);
                return b.getBigInt64();
            }

            MsrFsBase() {


                const b = new DataView(this.#buffer.read(8, 224), 0);
                return b.getBigInt64();
            }

            SpecialPadding0() {


                const b = new DataView(this.#buffer.read(8, 232), 0);
                return b.getBigInt64();
            }

        }
        POHANDLE__: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            unused() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

        }
        _INTERRUPT_LINE_STATE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 56);
            }

        ,

            Polarity() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

            EmulateActiveBoth() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

            TriggerMode() {

                // enum
                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();

            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            Routing() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    UnitId() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Line() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            ProcessorTarget() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Target() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();

                    }

                    PhysicalTarget() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                    LogicalFlatTarget() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                    RemapIndex() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                    ClusterId() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                    ClusterMask() {


                        const b = new DataView(this.#buffer.read(4, 12), 0);
                        return b.getUint32();
                    }

                    HypervisorTarget() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Low32() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            High32() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            InterruptData() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 8)
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            Vector() {


                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();
            }

            Priority() {


                const b = new DataView(this.#buffer.read(4, 52), 0);
                return b.getUint32();
            }

        }
        _KAFFINITY_EX: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 168);
            }

        ,

            Count() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Size() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Bitmap(arg) {

                // array
                return this.#buffer.read(8, (8 + (8 * arg));

            }

        }
        _XSAVE_FORMAT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 512);
            }

        ,

            ControlWord() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            StatusWord() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            TagWord() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(1, 5), 0);
                return b.getUint8();
            }

            ErrorOpcode() {


                const b = new DataView(this.#buffer.read(2, 6), 0);
                return b.getUint16();
            }

            ErrorOffset() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            ErrorSelector() {


                const b = new DataView(this.#buffer.read(2, 12), 0);
                return b.getUint16();
            }

            Reserved2() {


                const b = new DataView(this.#buffer.read(2, 14), 0);
                return b.getUint16();
            }

            DataOffset() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            DataSelector() {


                const b = new DataView(this.#buffer.read(2, 20), 0);
                return b.getUint16();
            }

            Reserved3() {


                const b = new DataView(this.#buffer.read(2, 22), 0);
                return b.getUint16();
            }

            MxCsr() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            MxCsr_Mask() {


                const b = new DataView(this.#buffer.read(4, 28), 0);
                return b.getUint32();
            }

            FloatRegisters(arg) {
                内置struct
            }

            XmmRegisters(arg) {
                内置struct
            }

            Reserved4(arg) {

                // array
                return this.#buffer.read(1, (416 + (1 * arg));

            }

        }
        _WHEA_PROCESSOR_GENERIC_ERROR_SECTION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 192);
            }

        ,

            ValidBits() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    ProcessorType() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    InstructionSet() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    ErrorType() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    Operation() {

                        return this.#buffer.bits().rd(3, 1);

                    }

                    Flags() {

                        return this.#buffer.bits().rd(4, 1);

                    }

                    Level() {

                        return this.#buffer.bits().rd(5, 1);

                    }

                    CPUVersion() {

                        return this.#buffer.bits().rd(6, 1);

                    }

                    CPUBrandString() {

                        return this.#buffer.bits().rd(7, 1);

                    }

                    ProcessorId() {

                        return this.#buffer.bits().rd(8, 1);

                    }

                    TargetAddress() {

                        return this.#buffer.bits().rd(9, 1);

                    }

                    RequesterId() {

                        return this.#buffer.bits().rd(10, 1);

                    }

                    ResponderId() {

                        return this.#buffer.bits().rd(11, 1);

                    }

                    InstructionPointer() {

                        return this.#buffer.bits().rd(12, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(13, 51);

                    }

                    ValidBits() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            ProcessorType() {


                const b = new DataView(this.#buffer.read(1, 8), 0);
                return b.getUint8();
            }

            InstructionSet() {


                const b = new DataView(this.#buffer.read(1, 9), 0);
                return b.getUint8();
            }

            ErrorType() {


                const b = new DataView(this.#buffer.read(1, 10), 0);
                return b.getUint8();
            }

            Operation() {


                const b = new DataView(this.#buffer.read(1, 11), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(1, 12), 0);
                return b.getUint8();
            }

            Level() {


                const b = new DataView(this.#buffer.read(1, 13), 0);
                return b.getUint8();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(2, 14), 0);
                return b.getUint16();
            }

            CPUVersion() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

            CPUBrandString(arg) {

                // array
                return this.#buffer.read(1, (24 + (1 * arg));

            }

            ProcessorId() {


                const b = new DataView(this.#buffer.read(8, 152), 0);
                return b.getBigInt64();
            }

            TargetAddress() {


                const b = new DataView(this.#buffer.read(8, 160), 0);
                return b.getBigInt64();
            }

            RequesterId() {


                const b = new DataView(this.#buffer.read(8, 168), 0);
                return b.getBigInt64();
            }

            ResponderId() {


                const b = new DataView(this.#buffer.read(8, 176), 0);
                return b.getBigInt64();
            }

            InstructionPointer() {


                const b = new DataView(this.#buffer.read(8, 184), 0);
                return b.getBigInt64();
            }

        }
        _MAPIC: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 48);
            }

        ,

            Header() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 36);
                    }

                ,

                    Signature() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    Length() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Revision() {


                        const b = new DataView(this.#buffer.read(1, 8), 0);
                        return b.getUint8();
                    }

                    Checksum() {


                        const b = new DataView(this.#buffer.read(1, 9), 0);
                        return b.getUint8();
                    }

                    OEMID(arg) {

                        // array
                        return this.#buffer.read(1, (10 + (1 * arg));

                    }

                    OEMTableID(arg) {

                        // array
                        return this.#buffer.read(1, (16 + (1 * arg));

                    }

                    OEMRevision() {


                        const b = new DataView(this.#buffer.read(4, 24), 0);
                        return b.getUint32();
                    }

                    CreatorID(arg) {

                        // array
                        return this.#buffer.read(1, (28 + (1 * arg));

                    }

                    CreatorRev() {


                        const b = new DataView(this.#buffer.read(4, 32), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            LocalAPICAddress() {


                const b = new DataView(this.#buffer.read(4, 36), 0);
                return b.getUint32();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 40), 0);
                return b.getUint32();
            }

            APICTables(arg) {

                // array
                return this.#buffer.read(4, (44 + (4 * arg));

            }

        }
        _DMA_OPERATIONS: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 280);
            }

        ,

            Size() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            PutDmaAdapter() {

                return this.#buffer.pointer(8);
            }

            AllocateCommonBuffer() {

                return this.#buffer.pointer(16);
            }

            FreeCommonBuffer() {

                return this.#buffer.pointer(24);
            }

            AllocateAdapterChannel() {

                return this.#buffer.pointer(32);
            }

            FlushAdapterBuffers() {

                return this.#buffer.pointer(40);
            }

            FreeAdapterChannel() {

                return this.#buffer.pointer(48);
            }

            FreeMapRegisters() {

                return this.#buffer.pointer(56);
            }

            MapTransfer() {

                return this.#buffer.pointer(64);
            }

            GetDmaAlignment() {

                return this.#buffer.pointer(72);
            }

            ReadDmaCounter() {

                return this.#buffer.pointer(80);
            }

            GetScatterGatherList() {

                return this.#buffer.pointer(88);
            }

            PutScatterGatherList() {

                return this.#buffer.pointer(96);
            }

            CalculateScatterGatherList() {

                return this.#buffer.pointer(104);
            }

            BuildScatterGatherList() {

                return this.#buffer.pointer(112);
            }

            BuildMdlFromScatterGatherList() {

                return this.#buffer.pointer(120);
            }

            GetDmaAdapterInfo() {

                return this.#buffer.pointer(128);
            }

            GetDmaTransferInfo() {

                return this.#buffer.pointer(136);
            }

            InitializeDmaTransferContext() {

                return this.#buffer.pointer(144);
            }

            AllocateCommonBufferEx() {

                return this.#buffer.pointer(152);
            }

            AllocateAdapterChannelEx() {

                return this.#buffer.pointer(160);
            }

            ConfigureAdapterChannel() {

                return this.#buffer.pointer(168);
            }

            CancelAdapterChannel() {

                return this.#buffer.pointer(176);
            }

            MapTransferEx() {

                return this.#buffer.pointer(184);
            }

            GetScatterGatherListEx() {

                return this.#buffer.pointer(192);
            }

            BuildScatterGatherListEx() {

                return this.#buffer.pointer(200);
            }

            FlushAdapterBuffersEx() {

                return this.#buffer.pointer(208);
            }

            FreeAdapterObject() {

                return this.#buffer.pointer(216);
            }

            CancelMappedTransfer() {

                return this.#buffer.pointer(224);
            }

            AllocateDomainCommonBuffer() {

                return this.#buffer.pointer(232);
            }

            FlushDmaBuffer() {

                return this.#buffer.pointer(240);
            }

            JoinDmaDomain() {

                return this.#buffer.pointer(248);
            }

            LeaveDmaDomain() {

                return this.#buffer.pointer(256);
            }

            GetDmaDomain() {

                return this.#buffer.pointer(264);
            }

            AllocateCommonBufferWithBounds() {

                return this.#buffer.pointer(272);
            }

        }
        __unnamed_15e6: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Alignment() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            MinimumAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            MaximumAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

        }
        __unnamed_15ea: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            MinimumVector() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            MaximumVector() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            AffinityPolicy() {


                const b = new DataView(this.#buffer.read(2, 8), 0);
                return b.getUint16();
            }

            Group() {


                const b = new DataView(this.#buffer.read(2, 10), 0);
                return b.getUint16();
            }

            PriorityPolicy() {

                // enum
                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();

            }

            TargetedProcessors() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

        }
        __unnamed_15ec: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            MinimumChannel() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            MaximumChannel() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        __unnamed_15ee: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            RequestLine() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Channel() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            TransferWidth() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

        }
        __unnamed_15f0: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Data(arg) {

                // array
                return this.#buffer.read(4, (0 + (4 * arg));

            }

        }
        __unnamed_15f2: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Length() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            MinBusNumber() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            MaxBusNumber() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

        }
        __unnamed_15f4: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Priority() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Reserved2() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_15f6: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Length40() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Alignment40() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            MinimumAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            MaximumAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

        }
        __unnamed_15f8: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Length48() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Alignment48() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            MinimumAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            MaximumAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

        }
        __unnamed_15fa: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Length64() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Alignment64() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            MinimumAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            MaximumAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

        }
        __unnamed_15fc: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Class() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Type() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Reserved2() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            IdLowPart() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            IdHighPart() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _IO_RESOURCE_DESCRIPTOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            Option() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            Type() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            ShareDisposition() {


                const b = new DataView(this.#buffer.read(1, 2), 0);
                return b.getUint8();
            }

            Spare1() {


                const b = new DataView(this.#buffer.read(1, 3), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(2, 4), 0);
                return b.getUint16();
            }

            Spare2() {


                const b = new DataView(this.#buffer.read(2, 6), 0);
                return b.getUint16();
            }

            u() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 24);
                    }

                ,

                    Port() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Alignment() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            MinimumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                            MaximumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Memory() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Alignment() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            MinimumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                            MaximumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Interrupt() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            MinimumVector() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            MaximumVector() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            AffinityPolicy() {


                                const b = new DataView(this.#buffer.read(2, 8), 0);
                                return b.getUint16();
                            }

                            Group() {


                                const b = new DataView(this.#buffer.read(2, 10), 0);
                                return b.getUint16();
                            }

                            PriorityPolicy() {

                                // enum
                                const b = new DataView(this.#buffer.read(4, 12), 0);
                                return b.getUint32();

                            }

                            TargetedProcessors() {


                                const b = new DataView(this.#buffer.read(8, 16), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Dma() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            MinimumChannel() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            MaximumChannel() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    DmaV3() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            RequestLine() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Reserved() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Channel() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            TransferWidth() {


                                const b = new DataView(this.#buffer.read(4, 12), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Generic() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Alignment() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            MinimumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                            MaximumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    DevicePrivate() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Data(arg) {

                                // array
                                return this.#buffer.read(4, (0 + (4 * arg));

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    BusNumber() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            MinBusNumber() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            MaxBusNumber() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                            Reserved() {


                                const b = new DataView(this.#buffer.read(4, 12), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    ConfigData() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Priority() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Reserved2() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Memory40() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length40() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Alignment40() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            MinimumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                            MaximumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Memory48() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length48() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Alignment48() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            MinimumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                            MaximumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Memory64() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            Length64() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Alignment64() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            MinimumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 8)
                            }

                            MaximumAddress() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 16)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Connection() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Class() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Type() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Reserved2() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            IdLowPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            IdHighPart() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

        }
        _SCATTER_GATHER_ELEMENT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Address() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

        }
        _KTB_FLUSH_VA: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            u1() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    NumberOfEntries() {

                        return this.#buffer.bits().rd(0, 10);

                    }

                    PageSize() {

                        return this.#buffer.bits().rd(10, 2);

                    }

                    Va() {

                        return this.#buffer.pointer(0);
                    }

                    VaLong() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

        }
        _ACCESS_STATE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 160);
            }

        ,

            OperationID() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            SecurityEvaluated() {


                const b = new DataView(this.#buffer.read(1, 8), 0);
                return b.getUint8();
            }

            GenerateAudit() {


                const b = new DataView(this.#buffer.read(1, 9), 0);
                return b.getUint8();
            }

            GenerateOnClose() {


                const b = new DataView(this.#buffer.read(1, 10), 0);
                return b.getUint8();
            }

            PrivilegesAllocated() {


                const b = new DataView(this.#buffer.read(1, 11), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            RemainingDesiredAccess() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            PreviouslyGrantedAccess() {


                const b = new DataView(this.#buffer.read(4, 20), 0);
                return b.getUint32();
            }

            OriginalDesiredAccess() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            SubjectSecurityContext() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 32);
                    }

                ,

                    ClientToken() {

                        return this.#buffer.pointer(0);
                    }

                    ImpersonationLevel() {

                        // enum
                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();

                    }

                    PrimaryToken() {

                        return this.#buffer.pointer(16);
                    }

                    ProcessAuditId() {

                        return this.#buffer.pointer(24);
                    }

                }
                return new cls(this.#buffer.address() + 32)
            }

            SecurityDescriptor() {

                return this.#buffer.pointer(64);
            }

            AuxData() {

                return this.#buffer.pointer(72);
            }

            Privileges() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 44);
                    }

                ,

                    InitialPrivilegeSet() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 44);
                            }

                        ,

                            PrivilegeCount() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Control() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Privilege(arg) {
                                内置struct
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    PrivilegeSet() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 20);
                            }

                        ,

                            PrivilegeCount() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Control() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Privilege(arg) {
                                内置struct
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 80)
            }

            AuditPrivileges() {


                const b = new DataView(this.#buffer.read(1, 124), 0);
                return b.getUint8();
            }

            ObjectName() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Length() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    MaximumLength() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Buffer() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 128)
            }

            ObjectTypeName() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Length() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    MaximumLength() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Buffer() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 144)
            }

        }
        __unnamed_1616: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            ContiguousHint() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Buffer() {

                        return this.#buffer.pointer(0);
                    }

                    Offset() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            ScatterHint() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Buffer() {

                        return this.#buffer.pointer(0);
                    }

                    Offset() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

        }
        _HALP_DMA_ADAPTER_OBJECT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 152);
            }

        ,

            DmaHeader() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Version() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    Size() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    DmaOperations() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            ContiguousMapRegisters() {

                return this.#buffer.pointer(16);
            }

            ScatterBufferListHead() {

                return this.#buffer.pointer(24);
            }

            NumberOfFreeScatterBuffers() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

            ContiguousTranslations() {

                return this.#buffer.pointer(40);
            }

            ScatterTranslations() {

                return this.#buffer.pointer(48);
            }

            ContiguousTranslationEnd() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Buffer() {

                        return this.#buffer.pointer(0);
                    }

                    Offset() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 56)
            }

            ScatterTranslationEnd() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Buffer() {

                        return this.#buffer.pointer(0);
                    }

                    Offset() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 72)
            }

            CrashDump() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 32);
                    }

                ,

                    ContiguousHint() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Buffer() {

                                return this.#buffer.pointer(0);
                            }

                            Offset() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    ScatterHint() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Buffer() {

                                return this.#buffer.pointer(0);
                            }

                            Offset() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 16)
                    }

                }
                return new cls(this.#buffer.address() + 88)
            }

            SpinLock() {


                const b = new DataView(this.#buffer.read(8, 120), 0);
                return b.getBigInt64();
            }

            GrowLock() {


                const b = new DataView(this.#buffer.read(8, 128), 0);
                return b.getBigInt64();
            }

            MaximumPhysicalAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 136)
            }

            IsMasterAdapter() {


                const b = new DataView(this.#buffer.read(1, 144), 0);
                return b.getUint8();
            }

            DmaCanCross64K() {


                const b = new DataView(this.#buffer.read(1, 145), 0);
                return b.getUint8();
            }

            LibraryVersion() {


                const b = new DataView(this.#buffer.read(4, 148), 0);
                return b.getUint32();
            }

        }
        _KDESCRIPTOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Pad(arg) {

                // array
                return this.#buffer.read(2, (0 + (2 * arg));

            }

            Limit() {


                const b = new DataView(this.#buffer.read(2, 6), 0);
                return b.getUint16();
            }

            Base() {

                return this.#buffer.pointer(8);
            }

        }
        _EXCEPTION_RECORD: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 152);
            }

        ,

            ExceptionCode() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            ExceptionFlags() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            ExceptionRecord() {

                return this.#buffer.pointer(8);
            }

            ExceptionAddress() {

                return this.#buffer.pointer(16);
            }

            NumberParameters() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

            ExceptionInformation(arg) {

                // array
                return this.#buffer.read(8, (32 + (8 * arg));

            }

        }
        _DMA_TRANSFER_INFO: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 20);
            }

        ,

            Version() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            V1() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 12);
                    }

                ,

                    MapRegisterCount() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    ScatterGatherElementCount() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    ScatterGatherListSize() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 4)
            }

            V2() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    MapRegisterCount() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    ScatterGatherElementCount() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    ScatterGatherListSize() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                    LogicalPageCount() {


                        const b = new DataView(this.#buffer.read(4, 12), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 4)
            }

        }
        _DMA_TRANSFER_INFO_V2: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            MapRegisterCount() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            ScatterGatherElementCount() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            ScatterGatherListSize() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            LogicalPageCount() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

        }
        __unnamed_162b: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Address() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Consumed() {


                const b = new DataView(this.#buffer.read(1, 8), 0);
                return b.getUint8();
            }

            ErrorCode() {


                const b = new DataView(this.#buffer.read(2, 10), 0);
                return b.getUint16();
            }

            ErrorIpValid() {


                const b = new DataView(this.#buffer.read(1, 12), 0);
                return b.getUint8();
            }

            RestartIpValid() {


                const b = new DataView(this.#buffer.read(1, 13), 0);
                return b.getUint8();
            }

        }
        _WHEA_RECOVERY_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            MemoryError() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Address() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    Consumed() {


                        const b = new DataView(this.#buffer.read(1, 8), 0);
                        return b.getUint8();
                    }

                    ErrorCode() {


                        const b = new DataView(this.#buffer.read(2, 10), 0);
                        return b.getUint16();
                    }

                    ErrorIpValid() {


                        const b = new DataView(this.#buffer.read(1, 12), 0);
                        return b.getUint8();
                    }

                    RestartIpValid() {


                        const b = new DataView(this.#buffer.read(1, 13), 0);
                        return b.getUint8();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            PartitionId() {


                const b = new DataView(this.#buffer.read(8, 16), 0);
                return b.getBigInt64();
            }

            VpIndex() {


                const b = new DataView(this.#buffer.read(4, 24), 0);
                return b.getUint32();
            }

        }
        _HALP_DMA_TRANSLATION_BUFFER: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Next() {

                return this.#buffer.pointer(0);
            }

            EntryCount() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Entries() {

                return this.#buffer.pointer(16);
            }

        }
        _SECONDARY_INTERRUPT_PROVIDER_INTERFACE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 88);
            }

        ,

            Size() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Version() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Context() {

                return this.#buffer.pointer(8);
            }

            GsivBase() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            GsivSize() {


                const b = new DataView(this.#buffer.read(2, 20), 0);
                return b.getUint16();
            }

            DriverObject() {

                return this.#buffer.pointer(24);
            }

            Reserved1() {

                return this.#buffer.pointer(32);
            }

            Reserved2() {

                return this.#buffer.pointer(40);
            }

            Reserved3() {

                return this.#buffer.pointer(48);
            }

            Reserved4() {

                return this.#buffer.pointer(56);
            }

            Reserved5() {

                return this.#buffer.pointer(64);
            }

            Reserved6() {

                return this.#buffer.pointer(72);
            }

            Reserved7() {

                return this.#buffer.pointer(80);
            }

        }
        _HALP_DMA_DOMAIN_OBJECT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 112);
            }

        ,

            ListEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            MaximumPhysicalAddress() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            BoundaryAddressMultiple() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            CacheCoherent() {


                const b = new DataView(this.#buffer.read(1, 32), 0);
                return b.getUint8();
            }

            FirmwareReserved() {


                const b = new DataView(this.#buffer.read(1, 33), 0);
                return b.getUint8();
            }

            IommuDomainPointer() {

                return this.#buffer.pointer(40);
            }

            LaState() {

                return this.#buffer.pointer(48);
            }

            LaStateLock() {


                const b = new DataView(this.#buffer.read(8, 56), 0);
                return b.getBigInt64();
            }

            TranslationType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 64), 0);
                return b.getUint32();

            }

            OwningAdapter() {

                return this.#buffer.pointer(72);
            }

            CommonBufferRoot() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Root() {

                        return this.#buffer.pointer(0);
                    }

                    Encoded() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    Min() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 80)
            }

            CommonBufferTreeLock() {


                const b = new DataView(this.#buffer.read(8, 96), 0);
                return b.getBigInt64();
            }

            DomainRefCount() {


                const b = new DataView(this.#buffer.read(4, 104), 0);
                return b.getUint32();
            }

        }
        _CM_FULL_RESOURCE_DESCRIPTOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 36);
            }

        ,

            InterfaceType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

            BusNumber() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            PartialResourceList() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 28);
                    }

                ,

                    Version() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    Revision() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Count() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    PartialDescriptors(arg) {
                        内置struct
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

        }
        _DMA_TRANSFER_INFO_V1: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            MapRegisterCount() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            ScatterGatherElementCount() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            ScatterGatherListSize() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _FAST_IO_DISPATCH: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 224);
            }

        ,

            SizeOfFastIoDispatch() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            FastIoCheckIfPossible() {

                return this.#buffer.pointer(8);
            }

            FastIoRead() {

                return this.#buffer.pointer(16);
            }

            FastIoWrite() {

                return this.#buffer.pointer(24);
            }

            FastIoQueryBasicInfo() {

                return this.#buffer.pointer(32);
            }

            FastIoQueryStandardInfo() {

                return this.#buffer.pointer(40);
            }

            FastIoLock() {

                return this.#buffer.pointer(48);
            }

            FastIoUnlockSingle() {

                return this.#buffer.pointer(56);
            }

            FastIoUnlockAll() {

                return this.#buffer.pointer(64);
            }

            FastIoUnlockAllByKey() {

                return this.#buffer.pointer(72);
            }

            FastIoDeviceControl() {

                return this.#buffer.pointer(80);
            }

            AcquireFileForNtCreateSection() {

                return this.#buffer.pointer(88);
            }

            ReleaseFileForNtCreateSection() {

                return this.#buffer.pointer(96);
            }

            FastIoDetachDevice() {

                return this.#buffer.pointer(104);
            }

            FastIoQueryNetworkOpenInfo() {

                return this.#buffer.pointer(112);
            }

            AcquireForModWrite() {

                return this.#buffer.pointer(120);
            }

            MdlRead() {

                return this.#buffer.pointer(128);
            }

            MdlReadComplete() {

                return this.#buffer.pointer(136);
            }

            PrepareMdlWrite() {

                return this.#buffer.pointer(144);
            }

            MdlWriteComplete() {

                return this.#buffer.pointer(152);
            }

            FastIoReadCompressed() {

                return this.#buffer.pointer(160);
            }

            FastIoWriteCompressed() {

                return this.#buffer.pointer(168);
            }

            MdlReadCompleteCompressed() {

                return this.#buffer.pointer(176);
            }

            MdlWriteCompleteCompressed() {

                return this.#buffer.pointer(184);
            }

            FastIoQueryOpen() {

                return this.#buffer.pointer(192);
            }

            ReleaseForModWrite() {

                return this.#buffer.pointer(200);
            }

            AcquireForCcFlush() {

                return this.#buffer.pointer(208);
            }

            ReleaseForCcFlush() {

                return this.#buffer.pointer(216);
            }

        }
        __unnamed_1686: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            BoundToMaster() {

                return this.#buffer.bits().rd(0, 1);

            }

            BoundToScatterPool() {

                return this.#buffer.bits().rd(1, 1);

            }

            OwnedByMaster() {

                return this.#buffer.bits().rd(2, 1);

            }

            OwnedByScatterPool() {

                return this.#buffer.bits().rd(3, 1);

            }

            TemporaryMapping() {

                return this.#buffer.bits().rd(4, 1);

            }

            ZeroBuffer() {

                return this.#buffer.bits().rd(5, 1);

            }

            Address() {

                return this.#buffer.bits().rd(6, 58);

            }

        }
        _HALP_DMA_TRANSLATION_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 72);
            }

        ,

            PhysicalAddress() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            Next() {

                return this.#buffer.pointer(8);
            }

            MappedLength() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            LogicalAddress() {


                const b = new DataView(this.#buffer.read(8, 24), 0);
                return b.getBigInt64();
            }

            LogicalMappedLength() {


                const b = new DataView(this.#buffer.read(8, 32), 0);
                return b.getBigInt64();
            }

            NextLogicalAddress() {


                const b = new DataView(this.#buffer.read(8, 40), 0);
                return b.getBigInt64();
            }

            u() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    VirtualAddress() {

                        return this.#buffer.pointer(0);
                    }

                    Flags() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            BoundToMaster() {

                                return this.#buffer.bits().rd(0, 1);

                            }

                            BoundToScatterPool() {

                                return this.#buffer.bits().rd(1, 1);

                            }

                            OwnedByMaster() {

                                return this.#buffer.bits().rd(2, 1);

                            }

                            OwnedByScatterPool() {

                                return this.#buffer.bits().rd(3, 1);

                            }

                            TemporaryMapping() {

                                return this.#buffer.bits().rd(4, 1);

                            }

                            ZeroBuffer() {

                                return this.#buffer.bits().rd(5, 1);

                            }

                            Address() {

                                return this.#buffer.bits().rd(6, 58);

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 48)
            }

            NextMapping() {

                return this.#buffer.pointer(56);
            }

            LogicalBounceBufferPremapped() {


                const b = new DataView(this.#buffer.read(1, 64), 0);
                return b.getUint8();
            }

        }
        _ERESOURCE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 104);
            }

        ,

            SystemResourcesList() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Flink() {

                        return this.#buffer.pointer(0);
                    }

                    Blink() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            OwnerTable() {

                return this.#buffer.pointer(16);
            }

            ActiveCount() {


                const b = new DataView(this.#buffer.read(2, 24), 0);
                return b.getUint16();
            }

            Flag() {


                const b = new DataView(this.#buffer.read(2, 26), 0);
                return b.getUint16();
            }

            ReservedLowFlags() {


                const b = new DataView(this.#buffer.read(1, 26), 0);
                return b.getUint8();
            }

            WaiterPriority() {


                const b = new DataView(this.#buffer.read(1, 27), 0);
                return b.getUint8();
            }

            SharedWaiters() {

                return this.#buffer.pointer(32);
            }

            ExclusiveWaiters() {

                return this.#buffer.pointer(40);
            }

            OwnerEntry() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    OwnerThread() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    IoPriorityBoosted() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    OwnerReferenced() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    IoQoSPriorityBoosted() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    OwnerCount() {

                        return this.#buffer.bits().rd(3, 29);

                    }

                    TableSize() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 48)
            }

            ActiveEntries() {


                const b = new DataView(this.#buffer.read(4, 64), 0);
                return b.getUint32();
            }

            ContentionCount() {


                const b = new DataView(this.#buffer.read(4, 68), 0);
                return b.getUint32();
            }

            NumberOfSharedWaiters() {


                const b = new DataView(this.#buffer.read(4, 72), 0);
                return b.getUint32();
            }

            NumberOfExclusiveWaiters() {


                const b = new DataView(this.#buffer.read(4, 76), 0);
                return b.getUint32();
            }

            Reserved2() {

                return this.#buffer.pointer(80);
            }

            Address() {

                return this.#buffer.pointer(88);
            }

            CreatorBackTraceIndex() {


                const b = new DataView(this.#buffer.read(8, 88), 0);
                return b.getBigInt64();
            }

            SpinLock() {


                const b = new DataView(this.#buffer.read(8, 96), 0);
                return b.getBigInt64();
            }

        }
        _DMA_FUNCTION_TABLE: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 80);
            }

        ,

            InitializeController() {

                return this.#buffer.pointer(0);
            }

            ValidateRequestLineBinding() {

                return this.#buffer.pointer(8);
            }

            QueryMaxFragments() {

                return this.#buffer.pointer(16);
            }

            ProgramChannel() {

                return this.#buffer.pointer(24);
            }

            ConfigureChannel() {

                return this.#buffer.pointer(32);
            }

            FlushChannel() {

                return this.#buffer.pointer(40);
            }

            HandleInterrupt() {

                return this.#buffer.pointer(48);
            }

            ReadDmaCounter() {

                return this.#buffer.pointer(56);
            }

            ReportCommonBuffer() {

                return this.#buffer.pointer(64);
            }

            CancelTransfer() {

                return this.#buffer.pointer(72);
            }

        }
        _EXT_IOMMU_DEVICE_ID: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            DeviceType() {

                // enum
                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();

            }

            Pci() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    AsUINT64() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                    PciSegmentNumber() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    PhantomFunctionBits() {

                        return this.#buffer.bits().rd(0, 2);

                    }

                    BusRange() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(3, 5);

                    }

                    StartBusNumber() {

                        return this.#buffer.bits().rd(8, 8);

                    }

                    Bdf() {


                        const b = new DataView(this.#buffer.read(2, 4), 0);
                        return b.getUint16();
                    }

                    SubordinateBus() {


                        const b = new DataView(this.#buffer.read(1, 4), 0);
                        return b.getUint8();
                    }

                    SecondaryBus() {


                        const b = new DataView(this.#buffer.read(1, 5), 0);
                        return b.getUint8();
                    }

                    DevicePathLength() {


                        const b = new DataView(this.#buffer.read(2, 6), 0);
                        return b.getUint16();
                    }

                    DevicePath() {

                        return this.#buffer.pointer(8);
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            Acpi() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    ObjectName() {

                        return this.#buffer.pointer(0);
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            IoApicId() {


                const b = new DataView(this.#buffer.read(1, 8), 0);
                return b.getUint8();
            }

            LogicalId() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

            Test() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    UniqueId() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            Gic() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 4);
                    }

                ,

                    LineNumber() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

        }
        _FILE_BASIC_INFORMATION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 40);
            }

        ,

            CreationTime() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            LastAccessTime() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            LastWriteTime() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            ChangeTime() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            FileAttributes() {


                const b = new DataView(this.#buffer.read(4, 32), 0);
                return b.getUint32();
            }

        }
        _DMA_TRANSFER_CONTEXT_V1: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 88);
            }

        ,

            DmaState() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            TransferState() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Wcb() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 72);
                    }

                ,

                    WaitQueueEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 24);
                            }

                        ,

                            DeviceListEntry() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Flink() {

                                        return this.#buffer.pointer(0);
                                    }

                                    Blink() {

                                        return this.#buffer.pointer(8);
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            SortKey() {


                                const b = new DataView(this.#buffer.read(4, 16), 0);
                                return b.getUint32();
                            }

                            Inserted() {


                                const b = new DataView(this.#buffer.read(1, 20), 0);
                                return b.getUint8();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    DmaWaitEntry() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Flink() {

                                return this.#buffer.pointer(0);
                            }

                            Blink() {

                                return this.#buffer.pointer(8);
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    NumberOfChannels() {


                        const b = new DataView(this.#buffer.read(4, 16), 0);
                        return b.getUint32();
                    }

                    SyncCallback() {

                        return this.#buffer.bits().rd(0, 1);

                    }

                    DmaContext() {

                        return this.#buffer.bits().rd(1, 1);

                    }

                    ZeroMapRegisters() {

                        return this.#buffer.bits().rd(2, 1);

                    }

                    Reserved() {

                        return this.#buffer.bits().rd(3, 9);

                    }

                    NumberOfRemapPages() {

                        return this.#buffer.bits().rd(12, 20);

                    }

                    DeviceRoutine() {

                        return this.#buffer.pointer(24);
                    }

                    DeviceContext() {

                        return this.#buffer.pointer(32);
                    }

                    NumberOfMapRegisters() {


                        const b = new DataView(this.#buffer.read(4, 40), 0);
                        return b.getUint32();
                    }

                    DeviceObject() {

                        return this.#buffer.pointer(48);
                    }

                    CurrentIrp() {

                        return this.#buffer.pointer(56);
                    }

                    BufferChainingDpc() {

                        return this.#buffer.pointer(64);
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            HalWcb() {

                return this.#buffer.pointer(80);
            }

        }
        _PRIVILEGE_SET: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 20);
            }

        ,

            PrivilegeCount() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Control() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Privilege(arg) {
                内置struct
            }

        }
        _INITIAL_PRIVILEGE_SET: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 44);
            }

        ,

            PrivilegeCount() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Control() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Privilege(arg) {
                内置struct
            }

        }
        _DMA_ADAPTER_INFO: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            Version() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            V1() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 20);
                    }

                ,

                    ReadDmaCounterAvailable() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    ScatterGatherLimit() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    DmaAddressWidth() {


                        const b = new DataView(this.#buffer.read(4, 8), 0);
                        return b.getUint32();
                    }

                    Flags() {


                        const b = new DataView(this.#buffer.read(4, 12), 0);
                        return b.getUint32();
                    }

                    MinimumTransferUnit() {


                        const b = new DataView(this.#buffer.read(4, 16), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 4)
            }

        }
        _HALP_DMA_TRANSLATION_BUFFER_POSITION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Buffer() {

                return this.#buffer.pointer(0);
            }

            Offset() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _EXT_IOMMU_DEVICE_ID_ACPI: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            ObjectName() {

                return this.#buffer.pointer(0);
            }

        }
        _LUID_AND_ATTRIBUTES: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Luid() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Attributes() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _EXT_IOMMU_DEVICE_ID_TEST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            UniqueId() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

        }
        _FILE_NETWORK_OPEN_INFORMATION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 56);
            }

        ,

            CreationTime() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            LastAccessTime() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            LastWriteTime() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 16)
            }

            ChangeTime() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 24)
            }

            AllocationSize() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 32)
            }

            EndOfFile() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 40)
            }

            FileAttributes() {


                const b = new DataView(this.#buffer.read(4, 48), 0);
                return b.getUint32();
            }

        }
        _SECURITY_SUBJECT_CONTEXT: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 32);
            }

        ,

            ClientToken() {

                return this.#buffer.pointer(0);
            }

            ImpersonationLevel() {

                // enum
                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();

            }

            PrimaryToken() {

                return this.#buffer.pointer(16);
            }

            ProcessAuditId() {

                return this.#buffer.pointer(24);
            }

        }
        _OWNER_ENTRY: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            OwnerThread() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            IoPriorityBoosted() {

                return this.#buffer.bits().rd(0, 1);

            }

            OwnerReferenced() {

                return this.#buffer.bits().rd(1, 1);

            }

            IoQoSPriorityBoosted() {

                return this.#buffer.bits().rd(2, 1);

            }

            OwnerCount() {

                return this.#buffer.bits().rd(3, 29);

            }

            TableSize() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _DMA_ADAPTER_INFO_V1: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 20);
            }

        ,

            ReadDmaCounterAvailable() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            ScatterGatherLimit() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            DmaAddressWidth() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(4, 12), 0);
                return b.getUint32();
            }

            MinimumTransferUnit() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

        }
        _EXT_IOMMU_DEVICE_ID_GIC: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 4);
            }

        ,

            LineNumber() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

        }
        _FILE_STANDARD_INFORMATION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 24);
            }

        ,

            AllocationSize() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            EndOfFile() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 8)
            }

            NumberOfLinks() {


                const b = new DataView(this.#buffer.read(4, 16), 0);
                return b.getUint32();
            }

            DeletePending() {


                const b = new DataView(this.#buffer.read(1, 20), 0);
                return b.getUint8();
            }

            Directory() {


                const b = new DataView(this.#buffer.read(1, 21), 0);
                return b.getUint8();
            }

        }
        _EXT_IOMMU_DEVICE_ID_PCI: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            AsUINT64() {


                const b = new DataView(this.#buffer.read(8, 0), 0);
                return b.getBigInt64();
            }

            PciSegmentNumber() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            PhantomFunctionBits() {

                return this.#buffer.bits().rd(0, 2);

            }

            BusRange() {

                return this.#buffer.bits().rd(2, 1);

            }

            Reserved() {

                return this.#buffer.bits().rd(3, 5);

            }

            StartBusNumber() {

                return this.#buffer.bits().rd(8, 8);

            }

            Bdf() {


                const b = new DataView(this.#buffer.read(2, 4), 0);
                return b.getUint16();
            }

            SubordinateBus() {


                const b = new DataView(this.#buffer.read(1, 4), 0);
                return b.getUint8();
            }

            SecondaryBus() {


                const b = new DataView(this.#buffer.read(1, 5), 0);
                return b.getUint8();
            }

            DevicePathLength() {


                const b = new DataView(this.#buffer.read(2, 6), 0);
                return b.getUint16();
            }

            DevicePath() {

                return this.#buffer.pointer(8);
            }

        }
        _CM_PARTIAL_RESOURCE_LIST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 28);
            }

        ,

            Version() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Revision() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Count() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            PartialDescriptors(arg) {
                内置struct
            }

        }
        __unnamed_16df: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Start() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_16e1: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Level() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            Group() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Vector() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Affinity() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        __unnamed_16e3: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Group() {


                const b = new DataView(this.#buffer.read(2, 0), 0);
                return b.getUint16();
            }

            MessageCount() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            Vector() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Affinity() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

        }
        __unnamed_16e5: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            Raw() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Group() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    MessageCount() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Vector() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Affinity() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Translated() {
                // structure
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Level() {


                        const b = new DataView(this.#buffer.read(2, 0), 0);
                        return b.getUint16();
                    }

                    Group() {


                        const b = new DataView(this.#buffer.read(2, 2), 0);
                        return b.getUint16();
                    }

                    Vector() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    Affinity() {


                        const b = new DataView(this.#buffer.read(8, 8), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

        }
        __unnamed_16e7: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Channel() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Port() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_16e9: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Channel() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            RequestLine() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            TransferWidth() {


                const b = new DataView(this.#buffer.read(1, 8), 0);
                return b.getUint8();
            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(1, 9), 0);
                return b.getUint8();
            }

            Reserved2() {


                const b = new DataView(this.#buffer.read(1, 10), 0);
                return b.getUint8();
            }

            Reserved3() {


                const b = new DataView(this.#buffer.read(1, 11), 0);
                return b.getUint8();
            }

        }
        __unnamed_16eb: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Start() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Length() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_16ed: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            DataSize() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Reserved1() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

            Reserved2() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_16ef: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Start() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Length40() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_16f1: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Start() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Length48() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        __unnamed_16f3: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 12);
            }

        ,

            Start() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 8);
                    }

                ,

                    LowPart() {


                        const b = new DataView(this.#buffer.read(4, 0), 0);
                        return b.getUint32();
                    }

                    HighPart() {


                        const b = new DataView(this.#buffer.read(4, 4), 0);
                        return b.getUint32();
                    }

                    u() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 8);
                            }

                        ,

                            LowPart() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            HighPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    QuadPart() {


                        const b = new DataView(this.#buffer.read(8, 0), 0);
                        return b.getBigInt64();
                    }

                }
                return new cls(this.#buffer.address() + 0)
            }

            Length64() {


                const b = new DataView(this.#buffer.read(4, 8), 0);
                return b.getUint32();
            }

        }
        _CM_PARTIAL_RESOURCE_DESCRIPTOR: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 20);
            }

        ,

            Type() {


                const b = new DataView(this.#buffer.read(1, 0), 0);
                return b.getUint8();
            }

            ShareDisposition() {


                const b = new DataView(this.#buffer.read(1, 1), 0);
                return b.getUint8();
            }

            Flags() {


                const b = new DataView(this.#buffer.read(2, 2), 0);
                return b.getUint16();
            }

            u() {
                // union
                const cls = class {
                    #buffer;

                    constructor(address) {
                        this.#buffer = memory.from(address, 16);
                    }

                ,

                    Generic() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Start() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Port() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Start() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Interrupt() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Level() {


                                const b = new DataView(this.#buffer.read(2, 0), 0);
                                return b.getUint16();
                            }

                            Group() {


                                const b = new DataView(this.#buffer.read(2, 2), 0);
                                return b.getUint16();
                            }

                            Vector() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Affinity() {


                                const b = new DataView(this.#buffer.read(8, 8), 0);
                                return b.getBigInt64();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    MessageInterrupt() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 16);
                            }

                        ,

                            Raw() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Group() {


                                        const b = new DataView(this.#buffer.read(2, 0), 0);
                                        return b.getUint16();
                                    }

                                    MessageCount() {


                                        const b = new DataView(this.#buffer.read(2, 2), 0);
                                        return b.getUint16();
                                    }

                                    Vector() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    Affinity() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            Translated() {
                                // structure
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 16);
                                    }

                                ,

                                    Level() {


                                        const b = new DataView(this.#buffer.read(2, 0), 0);
                                        return b.getUint16();
                                    }

                                    Group() {


                                        const b = new DataView(this.#buffer.read(2, 2), 0);
                                        return b.getUint16();
                                    }

                                    Vector() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    Affinity() {


                                        const b = new DataView(this.#buffer.read(8, 8), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Memory() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Start() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Dma() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Channel() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Port() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    DmaV3() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Channel() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            RequestLine() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            TransferWidth() {


                                const b = new DataView(this.#buffer.read(1, 8), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 9), 0);
                                return b.getUint8();
                            }

                            Reserved2() {


                                const b = new DataView(this.#buffer.read(1, 10), 0);
                                return b.getUint8();
                            }

                            Reserved3() {


                                const b = new DataView(this.#buffer.read(1, 11), 0);
                                return b.getUint8();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    DevicePrivate() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Data(arg) {

                                // array
                                return this.#buffer.read(4, (0 + (4 * arg));

                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    BusNumber() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Start() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Length() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Reserved() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    DeviceSpecificData() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            DataSize() {


                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                return b.getUint32();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            Reserved2() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Memory40() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Start() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            Length40() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Memory48() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Start() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            Length48() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Memory64() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Start() {
                                // union
                                const cls = class {
                                    #buffer;

                                    constructor(address) {
                                        this.#buffer = memory.from(address, 8);
                                    }

                                ,

                                    LowPart() {


                                        const b = new DataView(this.#buffer.read(4, 0), 0);
                                        return b.getUint32();
                                    }

                                    HighPart() {


                                        const b = new DataView(this.#buffer.read(4, 4), 0);
                                        return b.getUint32();
                                    }

                                    u() {
                                        // structure
                                        const cls = class {
                                            #buffer;

                                            constructor(address) {
                                                this.#buffer = memory.from(address, 8);
                                            }

                                        ,

                                            LowPart() {


                                                const b = new DataView(this.#buffer.read(4, 0), 0);
                                                return b.getUint32();
                                            }

                                            HighPart() {


                                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                                return b.getUint32();
                                            }

                                        }
                                        return new cls(this.#buffer.address() + 0)
                                    }

                                    QuadPart() {


                                        const b = new DataView(this.#buffer.read(8, 0), 0);
                                        return b.getBigInt64();
                                    }

                                }
                                return new cls(this.#buffer.address() + 0)
                            }

                            Length64() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                    Connection() {
                        // structure
                        const cls = class {
                            #buffer;

                            constructor(address) {
                                this.#buffer = memory.from(address, 12);
                            }

                        ,

                            Class() {


                                const b = new DataView(this.#buffer.read(1, 0), 0);
                                return b.getUint8();
                            }

                            Type() {


                                const b = new DataView(this.#buffer.read(1, 1), 0);
                                return b.getUint8();
                            }

                            Reserved1() {


                                const b = new DataView(this.#buffer.read(1, 2), 0);
                                return b.getUint8();
                            }

                            Reserved2() {


                                const b = new DataView(this.#buffer.read(1, 3), 0);
                                return b.getUint8();
                            }

                            IdLowPart() {


                                const b = new DataView(this.#buffer.read(4, 4), 0);
                                return b.getUint32();
                            }

                            IdHighPart() {


                                const b = new DataView(this.#buffer.read(4, 8), 0);
                                return b.getUint32();
                            }

                        }
                        return new cls(this.#buffer.address() + 0)
                    }

                }
                return new cls(this.#buffer.address() + 4)
            }

        }
        _DMA_REQUEST_LINE_BINDING_DESCRIPTION: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 8);
            }

        ,

            RequestLine() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            ChannelNumber() {


                const b = new DataView(this.#buffer.read(4, 4), 0);
                return b.getUint32();
            }

        }
        _DMA_SCATTER_GATHER_LIST: class {
            #buffer;

            constructor(address) {
                this.#buffer = memory.from(address, 16);
            }

        ,

            NumberOfElements() {


                const b = new DataView(this.#buffer.read(4, 0), 0);
                return b.getUint32();
            }

            Reserved() {


                const b = new DataView(this.#buffer.read(8, 8), 0);
                return b.getBigInt64();
            }

            Elements(arg) {
                内置struct
            }

        }
    }
}
hal_dll
